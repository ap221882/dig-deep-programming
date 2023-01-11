/*
 * * Pairs are used for storing more than one datatype in a single datatype. It itself is a datatype.
 */
#include <bits/std++.h>

using namespace std;

void explainPair()
{
  pair<int, int> p = {1, 2};

  cout << p.first << " " << p.second << endl;

  // Nested Pairs
  pair<int, pair<int, int>> np = {1, {2, 3}};
  cout << np.first << " " << np.second.first << np.second.second;

  // array of pairs
  pair<int, int> arr[] = {{1, 2}, {3, 4}, {5, 6}};
}

void printPairArray(pair<int, int> arr[])
{
  for (int i = 0; i < arr.size(); i++)
  {
    cout << arr[i].first << " " << arr[i].second << endl;
  }
}

int main()
{
  explainPair();
}