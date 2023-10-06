function addTwoNumbers(number1, number2) {
  return number1 + number2;
}
const result1 = addTwoNumbers(2, 2);
console.log(`This should log 2+2: ${result1}`);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const result2 = convertHoursToMinutes(2);
console.log(`This should log 60 * 2: ${result2}`);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}
const result3 = getGreeting('World');
console.log(result3);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
console.log(addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const result5 = multiplyAndDivideBy5(35, 10);
console.log(`This should log seventy: ${result5}`);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const result6 = subtractTwoNumbers(22, 7);
console.log(`This should log fifteen: ${result6}`);

function getCircleCircumference(radius) {
  const pi = Math.PI;
  return 2 * radius * pi;
}
const result7 = getCircleCircumference(5);
console.log(`This should log around 31: ${result7}`);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const result8 = getFullName('Juan', 'Ramirez');
console.log(`This should be Juan's full name: ${result8}`);

function cube(number) {
  return number * number * number;
}
const result9 = cube(5);
console.log(`This should log one twenty five: ${result9}`);
