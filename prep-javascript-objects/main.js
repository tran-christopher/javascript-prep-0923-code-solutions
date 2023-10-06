const person = {
  firstName: 'Bob',
  lastName: 'Bobbers',
  hobby: 'Going to the bathroom',
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Professional paper eater';
console.log("The person's current job is:", person.job);

person['previousJob'] = 'Toe licker';
console.log("The person's previous job was:", person['previousJob']);

console.log('The complete person object:', person);
