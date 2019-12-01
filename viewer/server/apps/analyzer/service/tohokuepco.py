import io
import pandas
import os

from viewer.server.apps.analyzer.function.dataframe import DataFrameFunction
from viewer.server.apps.analyzer.function.file import FileFunction
from viewer.server.apps.analyzer.service.service import Service


class TohokuEpcoService(Service):

    COMPANY_NAME = 'tohokuepco'

    @classmethod
    def correct_data(cls, urls, root_path, reflesh):
        processed_feather_paths = []

        for url in urls:
            try:
                feather_file_name = FileFunction.get_feather_file_name(url)
                original_feather_path = cls.__correct_ex_data(root_path, feather_file_name, url, reflesh)
                processed_feather_path = cls.__process_ex_data(original_feather_path, root_path, feather_file_name)
                processed_feather_paths.append(processed_feather_path)
            except Exception as e:
                print(f'{feather_file_name} => {e}')
                raise e

        merged_feather_path = DataFrameFunction.merge_ex_data(processed_feather_paths, root_path, cls.COMPANY_NAME)
        return merged_feather_path

    @classmethod
    def __correct_ex_data(cls, root_path, feather_file_name, url, reflesh):
        original_feather_path = FileFunction.get_original_feather_path(root_path, cls.COMPANY_NAME, feather_file_name)

        if reflesh or not os.path.exists(original_feather_path):
            decoded_data = FileFunction.get_decoded_data(url)
            # 「2016/10/1  1:00」とか余計な半角が存在するデータがあるので加工する。
            tohokuepco_csv = cls.__get_tohokuepco_csv(decoded_data)
            data_frame = cls.__parse(tohokuepco_csv)
            FileFunction.create_feather_file(original_feather_path, data_frame)

        return original_feather_path

    @classmethod
    def __process_ex_data(cls, original_feather_path, root_path, feather_file_name):
        data_frame = DataFrameFunction.get_data_frame_from_feather(original_feather_path)
        data_frame['company'] = cls.COMPANY_NAME

        # tohokuepcoは、日時で持っているのでTepcoに合わせて分割する。
        DataFrameFunction.create_date_and_time_from_datetime(data_frame)

        # Date型に変換しておく。
        data_frame['date_time'] = pandas.to_datetime(data_frame['date_time'], format='%Y/%m/%d %H:%M')

        # TOTAL算出 Total Supply Capacity
        data_frame['total_supply_capacity'] = DataFrameFunction.get_total_supply_capacity(data_frame)

        processed_feather_path = FileFunction.get_processed_feather_path(root_path, cls.COMPANY_NAME, feather_file_name)
        FileFunction.create_feather_file(processed_feather_path, data_frame)

        return processed_feather_path

    @classmethod
    def __get_tohokuepco_csv(cls, decoded_data):
        processed_data_list = []
        for i, data in enumerate(decoded_data.splitlines()):
            data = data.replace('  ', ' ')
            processed_data_list.append(data)
        tohokuepco_csv = '\r'.join(processed_data_list)
        return tohokuepco_csv

    @classmethod
    def __parse(cls, content):
        return pandas.read_csv(io.StringIO(content),
                           header=None,
                           skiprows=[0, 1],
                           na_values=[0],
                           names=[
                               'date_time',
                               'demand',
                               'hydro',
                               'thermal',
                               'nuclear',
                               'solar',
                               'solar_output_control',
                               'wind',
                               'wind_output_control',
                               'geothermal',
                               'biomass',
                               'pumping',
                               'interconnection'
                           ]
                           )
