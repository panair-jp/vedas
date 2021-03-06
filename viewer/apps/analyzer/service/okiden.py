import io
import pandas
import os

from viewer.apps.analyzer.function.dataframe import DataFrameFunction
from viewer.apps.analyzer.function.file import FileFunction
from viewer.apps.analyzer.service.service import Service


class OkidenService(Service):

    COMPANY_NAME = 'okiden'

    @classmethod
    def correct_data(cls, urls, root_path, reflesh):
        processed_pkl_paths = []

        for url in urls:
            try:
                pkl_file_name = FileFunction.get_pkl_file_name(url)
                original_pkl_path = cls.__correct_ex_data(root_path, pkl_file_name, url, reflesh)
                processed_pkl_path = cls.__process_ex_data(original_pkl_path, root_path, pkl_file_name)
                processed_pkl_paths.append(processed_pkl_path)
            except Exception as e:
                print(f'{pkl_file_name} => {e}')
                raise e

        merged_pkl_path = DataFrameFunction.merge_ex_data(processed_pkl_paths, root_path, cls.COMPANY_NAME)
        return merged_pkl_path

    @classmethod
    def __correct_ex_data(cls, root_path, pkl_file_name, url, reflesh):
        original_pkl_path = FileFunction.get_original_pkl_path(root_path, cls.COMPANY_NAME, pkl_file_name)

        if reflesh or not os.path.exists(original_pkl_path):
            decoded_data = FileFunction.get_decoded_data(url)
            # okidenは、空行が入っていたりするので、csv読み込み前にデータ補正が必要。
            okiden_csv = cls.__get_okiden_csv(decoded_data)
            data_frame = cls.__parse(okiden_csv)
            data_frame.reset_index()
            data_frame.reset_index()
            FileFunction.create_pkl_file(original_pkl_path, data_frame)

        return original_pkl_path

    @classmethod
    def __get_okiden_csv(cls, decoded_data):
        processed_data_list = []
        for i, data in enumerate(decoded_data.splitlines()):
            if i > 9:
                data = data.replace(' ', '').replace(',,', ',')
                processed_data_list.append(data[:-1])
        hepco_csv = '\r'.join(processed_data_list)
        return hepco_csv

    @classmethod
    def __process_ex_data(cls, original_pkl_path, root_path, pkl_file_name):
        data_frame = DataFrameFunction.get_data_frame_from_pkl(original_pkl_path)
        data_frame['company'] = cls.COMPANY_NAME

        # DateとTimeで分割されているので結合した項目を作る。
        DataFrameFunction.generate_data_time_field(data_frame)
        data_frame.set_index('date_time')

        # 沖縄にない電力項目は0で埋める。
        data_frame['nuclear'] = 0
        data_frame['geothermal'] = 0
        data_frame['pumping'] = 0
        data_frame['interconnection'] = 0

        processed_pkl_path = FileFunction.get_processed_pkl_path(root_path, cls.COMPANY_NAME, pkl_file_name)
        FileFunction.create_pkl_file(processed_pkl_path, data_frame)

        return processed_pkl_path

    @classmethod
    def __parse(cls, content):
        return pandas.read_csv(io.StringIO(content),
                           header=None,
                           skiprows=[],
                           na_values=[0],
                           names=[
                               'date',
                               'time',
                               'demand',
                               # 'nuclear',  # 沖縄は原子力がない。
                               'thermal',
                               'hydro',
                               # 'geothermal', 沖縄は地熱がない。
                               'biomass',
                               'solar',
                               'solar_output_control',
                               'wind',
                               'wind_output_control',
                               # 'pumping', 沖縄は揚水がない。
                               # 'interconnection', 沖縄は連系線がない。
                               'total_supply_capacity'
                           ]
                           )
