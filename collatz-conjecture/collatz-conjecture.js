export const steps = (integer) => {
  if (integer <= 0) throw Error('Only positive numbers are allowed');
  
  let result = integer;
  let steps = 0;
  while (result != 1){
    if (result % 2 == 0){
      result /= 2;
    } else {
      result *= 3;
      result++;
    }
    steps++;
  }
  return steps;
};
