#include <string.h>

void fakeBin(const char *digits, char *buffer) {
  // Please place result in the memory pointed to by
  // the buffer parameter. Buffer has enough memory to
  // accommodate the answer as well as the null-terminating
  // character.

  for (int i = 0; digits[i] != '\0'; i++) {
    buffer[i] = digits[i] < '5' ? '0' : '1';
  }
  // The above text implies I don't need this, but tests fail without it.
  buffer[strlen(digits)] = '\0';
}
