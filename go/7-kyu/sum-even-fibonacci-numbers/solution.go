package kata

func SumEvenFibonacci(limit int) int {
	e, a, b := 0, 0, 1
	for b <= limit {
		a, b = b, a+b
		if b%2 == 0 {
			e += b
		}
	}
	return e
}
