//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {
  return resolveBoard(input);
};

const resolveBoard = (list) => {
  let board = changeStringsToArray(list);

  for (let row = 0; row < board.length; row++){
    for (let column = 0; column < board[0].length; column++) {
      
      const place = board[row][column];

      if (place === '*') {
        //clue row
        if (column - 1 >= 0) {
          board[row][column - 1] = addClue(board[row][column - 1]);
        }
        if (column + 1 < board[0].length) {
          board[row][column + 1] = addClue(board[row][column + 1]);
        }
        //clue previous row
        if (row - 1 >= 0) {
          board[row - 1][column] = addClue(board[row - 1][column]);
          if (column - 1 >= 0) {
            board[row - 1][column - 1] = addClue(board[row - 1][column - 1]);
          }
          if (column + 1 < board[0].length) {
            board[row - 1][column + 1] = addClue(board[row - 1][column + 1]);
          }
        }
        //clue next row
        if (row + 1 < board.length) {
          board[row + 1][column] = addClue(board[row + 1][column]);
          if (column - 1 >= 0) {
            board[row + 1][column - 1] = addClue(board[row + 1][column - 1]);
          }
          if (column + 1 < board[0].length) {
            board[row + 1][column + 1] = addClue(board[row + 1][column + 1]);
          }
        }
      }
    }
  }

  return changesArrayToStrings(board);
}

const addClue = (item) => {
  return item === ' ' ? 1 : item === '*' ? item : item + 1;
}

const changeStringsToArray = (list) => {
  let result = [];
  list.forEach(element => {
    const line = [...element];
    result.push(line);
  });
  return result;
}

const changesArrayToStrings = (board) => {
  let result = [];
  board.forEach(row => {
    result.push(row.toString().replace(/,/g, ""));
  });
  return result;
}