package solution

import io.kotlintest.matchers.shouldBe
import io.kotlintest.specs.StringSpec

class TestTwoOldestAges : StringSpec() {
  init {
    "twoOldestAges(listOf(1,5,87,45,8,8)) should be listOf(45, 87)" {
      twoOldestAges(listOf(1,5,87,45,8,8)) shouldBe listOf(45, 87)
    }
    "twoOldestAges(listOf(6,5,83,5,3,18)) should be listOf(18, 83)" {
      twoOldestAges(listOf(6,5,83,5,3,18)) shouldBe listOf(18, 83)
    }
      "twoOldestAges(listOf(ages)) should be listOf(95, 99)" {
          twoOldestAges(listOf(16, 30, 78, 80, 70, 51, 19, 93, 69, 83, 60, 33, 58, 99, 45, 53, 71, 34, 50, 22, 48, 41, 20, 67, 39, 6, 47, 40, 82, 65, 63, 79, 36, 95, 68, 46, 24, 31, 23, 12, 55, 5, 49, 54, 72, 1, 77, 21, 2, 10, 11, 35, 15, 90, 74, 13, 52, 85, 4, 32, 25, 64, 94, 62, 73, 61, 27, 17, 86, 28, 84, 29, 75, 57, 89, 14, 44, 42, 26, 37, 18, 81, 66, 3, 91, 38, 87, 88, 76, 7, 92, 59, 8, 56, 9, 43)) shouldBe listOf(95, 99)
      }
  }
}
