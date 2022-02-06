import pandas as pd

from itertools import product
from random import random


class Parametеr:
	def __init__(self, name, list_of_values, shift = 0, division = 1):
		"""
		В результирующей формуле будет следующее выражение
		Result = (((value - shift)^2) / division)

		Result - результат функции
		value - текущее значение из list_values
		shift - сдвиг значения
		division - уменьшение значимости параметра
		"""
		self.name = name
		self.list_of_values = list_of_values
		self.shift = shift
		self.division = division


class Generator:
	def __init__(self, *args):
		self.list_of_params = list(args)
		self.experiments_count = 1
		self.shift = 0

	def set_shift(self, shift):
		self.shift = shift

	def set_inaccuracy(self, min, max):
		self.min_random = min
		self.max_random = max

	def set_experiments_count(self, count):
		self.experiments_count = count

	def run(self):
		params_values_list = []
		params_names_list = []
		for param in self.list_of_params:
			params_values_list.append(param.list_of_values)
			params_names_list.append(param.name)

		pd_table = PD_table(
			params_names_list +
			[f"Э{i}" for i in range(self.experiments_count)] +
			["Результат"]
		)
		for combination in product(*params_values_list):
			# for i in range(self.experiments_count):
			result_list = self.__calculate_paraboloid(combination)
			avg_result = [sum(result_list)/len(result_list)] 
			pd_table.append([list(combination)+ result_list + avg_result])
			# print(f"Для {combination} результат: {result}")
		pd_table.excel_output()
		# print(pd_table)
			
	def __calculate_paraboloid(self, combination):
		result = self.shift
		for i in range(len(combination)):
			shift = self.list_of_params[i].shift
			division = self.list_of_params[i].division
			result += (((combination[i] - shift)**2) / division)
		# Добавляю рандомайзер к конечному числу
		result_list = []
		for i in range(self.experiments_count):
			tmp = round(result + random() * (self.max_random-self.min_random) + self.min_random, 1)
			result_list.append(tmp)
			# result += random() * (self.max_random-self.min_random) + self.min_random
		return result_list


class PD_table:
	def __init__(self, columns):
		self.columns = columns
		self.table = pd.DataFrame(columns = columns)

	def append(self, rows):
		temp_rows = pd.DataFrame(rows, columns = self.columns)
		self.table = self.table.append(temp_rows)

	def excel_output(self, path = "default_name.xlsx"):
		with pd.ExcelWriter(path, engine="xlsxwriter") as writer:
			self.table.to_excel(writer)
