/* Adapted from the tests originally written by a code warrior petegarvin1 */

#include <criterion/criterion.h>
#include <string.h>

void fakeBin(const char*, char*);

Test(CoreTests, ShouldPassAllTheTestsProvided) {
  {
    const char *digits = "45385593107843568";
    char *buffer = (char*)malloc(sizeof(char) * (1 + strlen(digits)));
    if (!buffer) {
      cr_assert(0, "INTERNAL ERROR: Error during buffer allocation.");
    } else {
      fakeBin(digits, buffer);
      cr_assert(strcmp(buffer, "01011110001100111") == 0);
      free(buffer);
    }
  }

  {
    const char *digits = "509321967506747";
    char *buffer = (char*)malloc(sizeof(char) * (1 + strlen(digits)));
    if (!buffer) {
      cr_assert(0, "INTERNAL ERROR: Error during buffer allocation.");
    } else {
      fakeBin(digits, buffer);
      cr_assert(strcmp(buffer, "101000111101101") == 0);
      free(buffer);
    }
  }

  {
    const char *digits = "366058562030849490134388085";
    char *buffer = (char*)malloc(sizeof(char) * (1 + strlen(digits)));
    if (!buffer) {
      cr_assert(0, "INTERNAL ERROR: Error during buffer allocation.");
    } else {
      fakeBin(digits, buffer);
      cr_assert(strcmp(buffer, "011011110000101010000011011") == 0);
      free(buffer);
    }
  }

  {
    const char *digits = "15889923";
    char *buffer = (char*)malloc(sizeof(char) * (1 + strlen(digits)));
    if (!buffer) {
      cr_assert(0, "INTERNAL ERROR: Error during buffer allocation.");
    } else {
      fakeBin(digits, buffer);
      cr_assert(strcmp(buffer, "01111100") == 0);
      free(buffer);
    }
  }

  {
    const char *digits = "800857237867";
    char *buffer = (char*)malloc(sizeof(char) * (1 + strlen(digits)));
    if (!buffer) {
      cr_assert(0, "INTERNAL ERROR: Error during buffer allocation.");
    } else {
      fakeBin(digits, buffer);
      cr_assert(strcmp(buffer, "100111001111") == 0);
      free(buffer);
    }
  }
}
