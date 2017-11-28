test_that("Example Tests", {
  expect_equal(to24hourtime(1, 0, 'am'), '0100')
  expect_equal(to24hourtime(1, 0, 'pm'), '1300')
  expect_equal(to24hourtime(6, 30, 'am'), '0630')
  expect_equal(to24hourtime(9, 45, 'pm'), '2145')
  expect_equal(to24hourtime(12, 30, 'am'), '0030')
  expect_equal(to24hourtime(12, 45, 'pm'), '1245')
})
