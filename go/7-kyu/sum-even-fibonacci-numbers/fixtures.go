package kata_test

import (
  . "github.com/onsi/ginkgo"
  . "github.com/onsi/gomega"
  . "codewarrior/kata"
)

var _ = Describe("SumEvenFibonacci", func() {
  It("should return 10 for input 8", func() {
    Expect(SumEvenFibonacci(8)).To(Equal(10))
  })
  It("should return 60696 for input 111111", func() {
    Expect(SumEvenFibonacci(111111)).To(Equal(60696))
  })
  It("should return 4613732 for input 8675309", func() {
    Expect(SumEvenFibonacci(8675309)).To(Equal(4613732))
  })
})
