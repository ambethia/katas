#include <string>
using namespace std;

string encrypt(string text, int rule)
{
  for (char & c : text) c = char(int(c) + rule);
  return text;
};
