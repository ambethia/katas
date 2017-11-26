package solution

fun twoOldestAges(ages: List<Int>): List<Int> {
    var sortedAges = ages.sortedDescending()
    return listOf(sortedAges[1], sortedAges[0])
}
