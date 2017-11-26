function heron($a, $b, $c)
{
  $s = ($a + $b + $c) / 2;
  return sqrt($s * ($s - $a) * ($s - $b) * ($s - $c));
}
