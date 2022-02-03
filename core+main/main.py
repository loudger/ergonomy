from core import Parametеr
from core import Generator


if __name__ == "__main__":
	p1 = Parametеr("Длинна ребра", [1,2,3,4,5], 3)
	p2 = Parametеr("Ширина рамки узла", [0.2, 0.4, 0.6, 0.8, 1], 0.5)

	g = Generator(p1, p2)
	g.set_shift(5)
	g.set_inaccuracy(-2, 2)
	g.set_experiments_count(4)

	# g.set_expr_plan()

	g.run()

