// create your loops here.
function whileLoop1() {
  const newArray = [];
  let i = 0;
  while (i <= 9) {
    newArray.push(i);
    i++;
  }
  return newArray;
}
console.log(whileLoop1());

function whileLoop2() {
  const newArray2 = [];
  let i = 0;
  while (i <= 9) {
    newArray2.push(i * 2);
    i++;
  }
  return newArray2;
}
console.log(whileLoop2());

function forLoop1() {
  const newArray3 = [];
  for (let i = 0; i < 10; i++) {
    newArray3.push(i);
  }
  return newArray3;
}
console.log(forLoop1());

function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log(`Time till explosion ${i}!`);
  }
}
forLoop2();

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
function forInLoop1(object) {
  const newArray4 = [];
  for (const x in object) {
    newArray4.push(x);
  }
  return newArray4;
}
console.log(forInLoop1(object));

function forInLoop2(object) {
  const newArray5 = [];
  for (const x in object) {
    newArray5.push(object[x]);
  }
  return newArray5;
}
console.log(forInLoop2(object));
