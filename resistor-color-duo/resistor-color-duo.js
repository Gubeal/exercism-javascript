export const decodedValue = (colors) => {
  const MAX_DECIMALS = 2;
  let sum = '';
  for (let i = 0; i < MAX_DECIMALS; i++) {
    sum += COLORS.indexOf(colors[i])
  }
  return parseInt(sum);
};

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];