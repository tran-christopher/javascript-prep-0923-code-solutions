/* exported getWords */
function getWords(string) {
  if (!string) return [];
  const newArray = string.split(' ');
  return newArray;
}
