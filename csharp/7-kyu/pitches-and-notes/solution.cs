using System;

public static partial class Kata
{
  public static string[] notes = { "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" };
  public static double C0 = 440 * Math.Pow(2, -4.75);

  public static string GetNote(double pitch)
  {
    int semi = (int)Math.Round(12 * Math.Log(pitch / C0, 2));
    return notes[(semi % 12 + 12) % 12];
  }
}
