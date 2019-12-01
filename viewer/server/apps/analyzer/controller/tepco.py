import time

from viewer.server.apps.analyzer.controller.controller import Controller

from viewer.server.apps.analyzer.function.file import FileFunction
from viewer.server.apps.analyzer.function.measurement import MeasurementFunction
from viewer.server.apps.analyzer.service.query import QueryService
from viewer.server.apps.analyzer.service.tepco import TepcoService


class TepcoController(Controller):

    COMPANY_NAME = 'tepco'

    @classmethod
    def correct_data(cls, root_path, reflesh):
        start = time.time()
        json = FileFunction.get_param_json(root_path, cls.COMPANY_NAME)
        MeasurementFunction.rap(start)
        TepcoService.correct_data(json['url'], root_path, reflesh)
        MeasurementFunction.rap(start)
        count = QueryService.count(root_path, cls.COMPANY_NAME)
        MeasurementFunction.rap(start)
        return count

    @classmethod
    def count(cls, root_path):
        return QueryService.count(root_path, cls.COMPANY_NAME)

    @classmethod
    def get(cls, root_path):
        return QueryService.get(root_path, cls.COMPANY_NAME)
