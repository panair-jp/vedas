import json
import pathlib
import os

from viewer.apps.analyzer.function.request import RequestFunction


class FileFunction(object):
    COMPANY_NAME_REPLACE_KEYWORD = '{COMPANY_NAME}'
    APL_FOLDER = 'viewer/apps/analyzer'
    ORIGINAL_FOLDER = f'{APL_FOLDER}/data/{COMPANY_NAME_REPLACE_KEYWORD}/original'
    PROCESSED_FOLDER = f'{APL_FOLDER}/data/{COMPANY_NAME_REPLACE_KEYWORD}/processed'
    MERGED_FOLDER = f'{APL_FOLDER}/data/{COMPANY_NAME_REPLACE_KEYWORD}/merged'
    MERGED_CSV_FOLDER = f'{APL_FOLDER}/data/{COMPANY_NAME_REPLACE_KEYWORD}/merged_csv'
    CURRENT_HTML_FOLDER = f'{APL_FOLDER}/html/{COMPANY_NAME_REPLACE_KEYWORD}/current'
    PREV_HTML_FOLDER = f'{APL_FOLDER}/html/{COMPANY_NAME_REPLACE_KEYWORD}/prev'
    JSON_FILE_FOLDER = f'{APL_FOLDER}/param'

    @classmethod
    def create_current_html(cls, root_path, company, html):
        file_path = cls.get_current_html_path(root_path, company)
        with open(file_path, 'w') as f:
            f.write(html)

        prev_file_path = cls.get_prev_html_path(root_path, company)
        if os.path.exists(prev_file_path) is False:
            with open(prev_file_path, 'w') as f:
                f.write(html)

    @classmethod
    def get_current_html_path(cls, root_path, company):
        return f'{root_path}/{cls.CURRENT_HTML_FOLDER.replace(cls.COMPANY_NAME_REPLACE_KEYWORD, company)}/{company}.html'

    @classmethod
    def get_prev_html_path(cls, root_path, company):
        return f'{root_path}/{cls.PREV_HTML_FOLDER.replace(cls.COMPANY_NAME_REPLACE_KEYWORD, company)}/{company}.html'

    @classmethod
    def get_param_json(cls, root_path, company):
        with open(f'{root_path}/{cls.JSON_FILE_FOLDER}/{company}.json', 'r') as f:
            return json.loads(f.read())

    @classmethod
    def get_original_pkl_path(cls, root_path, company, pkl_file_name):
        return cls.__get_pkl_path(cls.ORIGINAL_FOLDER, root_path, company, pkl_file_name)

    @classmethod
    def get_processed_pkl_path(cls, root_path, company, pkl_file_name):
        return cls.__get_pkl_path(cls.PROCESSED_FOLDER, root_path, company, pkl_file_name)

    @classmethod
    def get_merged_pkl_path(cls, root_path, company):
        return cls.__get_pkl_path(cls.MERGED_FOLDER, root_path, company, company + '.pkl')

    @classmethod
    def get_merged_csv_path(cls, root_path, company):
        return cls.__get_pkl_path(cls.MERGED_CSV_FOLDER, root_path, company, company + '.csv')

    @classmethod
    def __get_pkl_path(cls, folder, root_path, company, pkl_file_name):
        return f'{root_path}/{folder.replace(cls.COMPANY_NAME_REPLACE_KEYWORD, company)}/{pkl_file_name}'

    @classmethod
    def create_pkl_file(cls, pkl_path, data_frame):
        pathlib.Path(pkl_path)

        # Demandが欠損値のデータは使えないので削除しておく。
        data_frame = data_frame.dropna(subset=['demand'])
        data_frame.to_pickle(pkl_path)

    @classmethod
    def get_pkl_file_name(cls, url):
        split_urls = url.split('/')
        csv_file_name = split_urls[-1]
        # 北海道電力とかExcelもいるので対応しておく。
        return csv_file_name.replace('.csv', '.pkl').replace('.xlsx', '.pkl').replace('.xls', '.pkl')

    @classmethod
    def get_decoded_data(cls, url):
        decoded_data = RequestFunction.get_decoded_data(url)
        return decoded_data
