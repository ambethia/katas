namespace Solution 
{
  using NUnit.Framework;
  using System;

  [TestFixture]
  public class SolutionTest
  {
    [Test]
    public void SampleTest()
    {
      Assert.That(Kata.GetNote(440), Is.EqualTo("A"));
      Assert.That(Kata.GetNote(220), Is.EqualTo("A"));
      Assert.That(Kata.GetNote(880), Is.EqualTo("A"));
      
      Assert.That(Kata.GetNote(523.25), Is.EqualTo("C"));
      Assert.That(Kata.GetNote(261.625), Is.EqualTo("C"));
      Assert.That(Kata.GetNote(1046.5), Is.EqualTo("C"));
    }
  }
}