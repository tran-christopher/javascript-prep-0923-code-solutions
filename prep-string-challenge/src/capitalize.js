/* exported capitalize */
function capitalize(word) {
  let firstString = '';
  let secondString = '';
  for (let i = 0; i < word.length; i++) {
    if (i < 1) {
      firstString = word[i].toUpperCase();
    } else {
      secondString += word[i].toLowerCase();
    }
  }
  return firstString + secondString;
}
