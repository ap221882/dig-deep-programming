function reverseNumber(number: number) {
  let reversedNumber: number = 0;

  while (number > 0) {
    let digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = Math.floor(number / 10);
  }
  return reversedNumber;
}

console.log(reverseNumber(543876887));
