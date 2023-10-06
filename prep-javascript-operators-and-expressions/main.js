const number1 = 2;
const number2 = 3;

const product = number1 * number2;
console.log('Product of 2 times 3:', product);
console.log('Type of variable product:', typeof product);

const charge = 5;
const payment = 3;

const amountRemaining = charge - payment;
console.log('Subtracting 3 from 5:', amountRemaining);
console.log('type of amountRemaining variable:', typeof amountRemaining);

const tests = 5;
const assignments = 10;
const final = 15;

const grade = (tests + assignments + final) / 3;
console.log('average of 3 scores:', grade);
console.log('type of grade variable:', typeof grade);

const firstName = 'Bob';
const lastName = 'Bobber';

const fullName = `${firstName} ${lastName}`;
console.log('should be full name Bob Bobbers:', fullName);
console.log('type of variable fullName:', typeof fullName);

const pH = 5;

const isAcidic = pH < 7;
console.log('should log true:', isAcidic);
console.log('type of variable isAcidic:', typeof isAcidic);

const numberOfSoldiers = 20;

const isSparta = numberOfSoldiers === 300;
console.log('should show false:', isSparta);
console.log('type of variable isSparta:', typeof isSparta);

let nickname = fullName;

nickname += ' ' + 'is the GOAT';
console.log('should show nickname plus goat message:', nickname);
console.log('type of variable nickname:', typeof nickname);
