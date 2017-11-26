@implementation TestSuite
  - (void) testsBasics
  {
    UKIntsEqual(@254, [NSNumber numberWithInteger: mod256WithoutMod(254)]);
    UKIntsEqual(@0, [NSNumber numberWithInteger: mod256WithoutMod(256)]);
    UKIntsEqual(@2, [NSNumber numberWithInteger: mod256WithoutMod(258)]);
    UKIntsEqual(@-254, [NSNumber numberWithInteger: mod256WithoutMod(-254)]);
    UKIntsEqual(@0, [NSNumber numberWithInteger: mod256WithoutMod(-256)]);
    UKIntsEqual(@-2, [NSNumber numberWithInteger: mod256WithoutMod(-258)]);
  }
@end
