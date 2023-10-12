/* exported compact */
/*
function that:
omits false and keeps true,
omits null,
omits NaN,
omits 0 and -0,
omits undefined,
omits empty strings,
maintains order of truthy elements,
*/

function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
