#include <bits/std++.h>

using namespace std;

int countTheDigits1(int number)
{
  int count = 0;
  while (number > 0)
  {
    number /= 10;
    count++;
  }
  return count;
}

int countTheDigits2(int number)
{
  int count = (int)(log10(number) + 1);
  return count;
}

int main()
{
  int n;
  cin >> n;
  countTheDigits1(n);
  countTheDigits2(n);
}