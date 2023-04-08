export const annotate = (input) => {
  return resolveBoard(input);
};

const resolveBoard = (list) => {
  let board = changeStringsToArray(list);

  const numRows = board.length;
  const numCols = board[0] ? board[0].length : 0;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (board[row][col] === '*') {
        addCluesAroundMine(board, row, col, numRows, numCols);
      }
    }
  }

  return changeArrayToStrings(board);
}

const addCluesAroundMine = (board, row, col, numRows, numCols) => {
  for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
    for (let colOffset = -1; colOffset <= 1; colOffset++) {
      const newRow = row + rowOffset;
      const newCol = col + colOffset;
      if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
        addClue(board, newRow, newCol);
      }
    }
  }
}

const addClue = (board, row, col) => {
  if (board[row][col] !== '*') {
    if (board[row][col] === ' ') {
      board[row][col] = 1;
    } else {
      board[row][col]++;
    }
  }
};

const changeStringsToArray = (list) => {
  return list.map(line => [...line]);
}

const changeArrayToStrings = (board) => {
  return board.map(row => row.join(''));
}
