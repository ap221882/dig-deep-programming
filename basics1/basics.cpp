// #include<iostream>
#include<bits/stdc++.h>
using namespace std;

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
 return 0;

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
}

// int, long, long long
// float, double
// INTEGERS CAN BE STORED IN FLOATS TOO