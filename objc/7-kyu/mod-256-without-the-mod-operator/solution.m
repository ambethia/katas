#import <Foundation/Foundation.h>
#import <math.h>

int mod256WithoutMod(int n)
{
  int r = abs(n) & 0xff;
  return n > 0 ? r : r * -1;
}
