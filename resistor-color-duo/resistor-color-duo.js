export const decodedValue = (colors) => {
  return Number(colors.map( colorValues => COLORS.indexOf(colorValues)).slice(0,2).join(''));
};

export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];