public class GameInput
{
  public static final float epsilon = 0.00000001f;

  public float[] getVector(boolean[] wasd)
  {
    float h = 0;
    float v = 0;

    if (wasd[0]) v += 1;
    if (wasd[1]) h -= 1;
    if (wasd[2]) v -= 1;
    if (wasd[3]) h += 1;

    if (h == 0 && v == 0) return new float[]{h, v};

    double theta = Math.atan2(v, h);
    float x = (float)Math.cos(theta);
    float y = (float)Math.sin(theta);

    return new float[] {
      Math.abs(x) < epsilon ? 0 : x,
      Math.abs(y) < epsilon ? 0 : y
    };
  }
}
