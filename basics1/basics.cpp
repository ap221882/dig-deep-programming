// #include<iostream>
#include<bits/stdc++.h>
using namespace std;

void printName(string name){
 cout << "hey" << name;
}

// pass by reference
void doSomething(string s){
 s[0]='r';
 cout << s << endl;
}


// pass by reference
void doSomething2(string &s){
 s[0]='r';
 cout << s << endl;
}
// Arrays are passed by reference by themselves, vectors etc need to be passed by us by reference if needed.


int main(){
 cout << "I'm here" << endl;
 // Print and take outputs/inputs 
 // int x, y;
 // cin >> x >> y;
 // cout << "Value of x: " << x << " and y: " << y;

 // Print strings/sentences which come from input
 // 1
 string s1, s2;
 cin >> s1 >> s2;
 cout << s1 << " " << s2;

 // 2
 string str;
 getline(cin,str);
 cout << str;

 // characters
 char ch;
 cin >> ch;
 cout << ch;

 //CONDITIONALS

 int age;
 cin >> age;
 if(age>=18){
  cout << "Adult";
 }else if(age<18 && age>=5){
  cout << "Minor";
 }else {
  cout << "Child";
 }

 // switch case
 string day;
 switch (day)
 {
 case "Monday" :
  /* code */
  cout << "weekend gone"; 
  break;
 
 default:
  break;
 }
  /*
  * * Arrays
  */
 int arr[5];
 cin >> arr[0] >> arr[1] >> arr[2];
 cout << arr[0]++ << arr[1]++;

 // 2D
 int twoDArray[3][5];
 a[1][2] = 9;
 cout << a[1][2];

  /*
  * * String
  */
 string str = "STRING";
 int len = str.size();
 cout << str[len-1];

  /*
  * * Function
  */
 printName("Ajay");
 doSomething("Ajay")
 doSomething2("Ajay")
 return 0;
}

// int, long, long long
// float, double
// INTEGERS CAN BE STORED IN FLOATS TOO