const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  
  const transposedLetters = transpose(letters);
  console.log(transposedLetters);
  const verticalJoin = transposedLetters.map(ls => ls.join(''));
  for (let v of verticalJoin) {
    if (v.includes(word)) return true;
  }
  
  return false;
};
  
const transpose = function(letter) {
  const transposeMatrix = [];
  for (let col = 0; col < letter[0].length; col++) {
    transposeMatrix[col] = [];
    for (let row = 0; row < letter.length; row ++) {
      transposeMatrix[col][row] = letter[row][col];
    }
  }
  return transposeMatrix;
};
module.exports = wordSearch;