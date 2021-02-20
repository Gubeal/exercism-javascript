export const isArmstrongNumber = (num=0) => {
  if (typeof num != 'number') return false;
  let number = num.toString();
  let calc = 0;
  for (let i = 0; i<number.length; i++) {
    calc += (Math.pow(parseInt(number[i]), number.length));
  }
  return (calc == num);
};
