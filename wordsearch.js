const wordSearch = (letters, word) => {
  if (word === undefined || letters === undefined) {
    return undefined;
  }

  const diagonals = matrix => {
    const result = [];
    let row = matrix.length;
    let col = matrix[0].length;
		
    const diagTop = row => {
      for (let k = 0; k < row; k++) {
        const diagArr = [];
        let i = k;
        let j = 0;
        while (i >= 0) {
          diagArr.push(matrix[i][j]);
          i--;
          j++;
        }
        result.push(diagArr);
      }
    };
	
    const diagBottom = col => {
      for (let k = 1; k <= col - 1; k++) {
        const diagArr = [];
        let i = row - 1;
        let j = k;
        while (j <= col - 1) {
          diagArr.push(matrix[i][j]);
          i--;
          j++;
        }
        result.push(diagArr);
      }
    };
    diagTop(row);
    diagBottom(col);
	
    return result;
  };

  const diagonalLetters = diagonals(letters);
  const diagonalJoin = diagonalLetters.map(ls => ls.join(''));
  const transposedLetters = transpose(letters);
  const verticalJoin = transposedLetters.map(ls => ls.join(''));
  const reverseVerticalJoin = verticalJoin.map(wds => wds.split('').reverse().join(''));
  const horizontalJoin = letters.map(ls => ls.join(''));
  const reverseHorizontalJoin = letters.map(ls => ls.reverse().join(''));
  
  if (horizontalJoin.includes(word) || verticalJoin.includes(word) || reverseHorizontalJoin.includes(word) || reverseVerticalJoin.includes(word) || diagonalJoin.includes(word)) {
    return true;
  }

  return false;
};




const transpose = function(matrix) {
  const result = [];
  for (let cols in matrix[0]) {
    const col = [];
    for (let rows in matrix) {
      col.push(matrix[rows][cols]);
    }
    result.push(col);
  }
  return result;
};




module.exports = wordSearch;