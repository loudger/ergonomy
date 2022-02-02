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
		self.shift = 0

	def set_shift(self, shift):
		self.shift = shift

	def set_inaccuracy(self, min, max):
		self.min_random = min
		self.max_random = max

	def run(self):
		params_values_lists = []
		for param in self.list_of_params:
			params_values_lists.append(param.list_of_values)

		for combination in product(*params_values_lists):
			result = self.__calculate_paraboloid(combination)
			print(f"Для {combination} результат: {result}")
			

	def __calculate_paraboloid(self, combination):
		result = self.shift
		for i in range(len(combination)):
			shift = self.list_of_params[i].shift
			division = self.list_of_params[i].division
			result += (((combination[i] - shift)**2) / division)
		result += random() * (self.max_random-self.min_random) + self.min_random
		return round(result, 1)
