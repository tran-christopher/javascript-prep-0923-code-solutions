/* exported initial */
function initial(array) {
  const newArray = [];
  let i = 0;
  while (i < array.length - 1) {
    newArray.push(array[i]);
    i++;
  }
  return newArray;
}
