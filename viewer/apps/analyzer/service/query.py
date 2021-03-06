import json
from datetime import datetime

from dateutil.relativedelta import relativedelta

from viewer.apps.analyzer.function.dataframe import DataFrameFunction


class QueryService(object):

    @classmethod
    def count(cls, root_path, company_name):
        data_frame = DataFrameFunction.get_data_frame_from_merged_pkl(root_path, company_name)
        return len(data_frame.index)

    @classmethod
    def get(cls, root_path, company_name, unit, from_value, to_value):
        data_frame = DataFrameFunction.get_data_frame_from_merged_pkl(root_path, company_name)
        from_values = from_value.split('/')
        to_values = to_value.split('/')
        from_date = datetime(int(from_values[0]), int(from_values[1]), 1)
        to_date = datetime(int(to_values[0]), int(to_values[1]), 1) + relativedelta(months=1, days=-1)
        data_frame = data_frame[(from_date <= data_frame['date']) & (data_frame['date'] <= to_date)]

        result = None

        if unit == 'y':
            result = cls.sum_group_by_year(data_frame)
        elif unit == 'ym':
            result = cls.sum_group_by_year_and_month(data_frame)
        elif unit == 'ymd':
            result = cls.sum_group_by_year_and_month_and_date(data_frame)

        return json.loads(result)

    @classmethod
    def get_daily_data(cls, root_path, company_name, unit, year_value, month_value, date_value):
        data_frame = DataFrameFunction.get_data_frame_from_merged_pkl(root_path, company_name)
        target_date = datetime(int(year_value), int(month_value), int(date_value))
        data_frame = data_frame[(data_frame['date'] == target_date)]

        result = None
        if unit == '1H':
            result = data_frame.to_json(date_format='iso').replace('T', ' ').replace(':00.000Z', '')

        return json.loads(result)

    @classmethod
    def sum_group_by_year_and_month_and_date(cls, data_frame):
        data_frame['date_string'] = data_frame['date'].dt.strftime('%Y/%m/%d')
        df_ymd = data_frame.set_index([data_frame.index.year, data_frame.index.month, data_frame.index.date])
        df_ymd.index.names = ['year', 'month', 'date_string']
        df_ymd.sort_index(inplace=True)

        try:
            result = df_ymd.sum(
                level=['date_string']
            )[
                [
                    'demand',
                    'nuclear',
                    'thermal',
                    'hydro',
                    'geothermal',
                    'biomass',
                    'solar',
                    'solar_output_control',
                    'wind',
                    'wind_output_control',
                    'pumping',
                    'interconnection',
                    'total_supply_capacity'
                ]
            ]
        except Exception as e:
            raise e
        return DataFrameFunction.to_float_and_round(result).to_json(date_format='iso').replace('T00:00:00.000Z', '')

    @classmethod
    def sum_group_by_year_and_month(cls, data_frame):
        df_ym = data_frame.set_index([data_frame.index.year, data_frame.index.month])
        df_ym.index.names = ['year', 'month']
        df_ym.sort_index(inplace=True)

        try:
            result = df_ym.sum(
                level=['year', 'month']
            )[
                [
                    'demand',
                    'nuclear',
                    'thermal',
                    'hydro',
                    'geothermal',
                    'biomass',
                    'solar',
                    'solar_output_control',
                    'wind',
                    'wind_output_control',
                    'pumping',
                    'interconnection',
                    'total_supply_capacity'
                ]
            ]
        except Exception as e:
            raise e
        return DataFrameFunction.to_float_and_round(result).to_json()

    @classmethod
    def sum_group_by_year(cls, data_frame):
        df_y = data_frame.set_index([data_frame.index.year])
        df_y.index.names = ['year']
        df_y.sort_index(inplace=True)

        try:
            result = df_y.sum(
                level=['year']
            )[
                [
                    'demand',
                    'nuclear',
                    'thermal',
                    'hydro',
                    'geothermal',
                    'biomass',
                    'solar',
                    'solar_output_control',
                    'wind',
                    'wind_output_control',
                    'pumping',
                    'interconnection',
                    'total_supply_capacity'
                ]
            ]
        except Exception as e:
            raise e
        return DataFrameFunction.to_float_and_round(result).to_json()
