/* exported isVowel */
function isVowel(char) {
  const vowels = 'aeiou';
  char = char.toLowerCase();
  return vowels.includes(char);
}
