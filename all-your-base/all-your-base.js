export const convert = (sequence=[], fromBase=0, toBase=0) => {
  if (fromBase <= 1) throw new Error('Wrong input base');
  
  if (toBase <= 1) throw new Error('Wrong output base');
  
  if (sequence.length == 0 || (sequence[0] == 0 && sequence.length > 1)) throw new Error('Input has wrong format');

  for (let number of sequence) {
    if (number < 0 || number >= fromBase) throw new Error('Input has wrong format');
  }

  function baseToDecimal(sequence=[0], base){
    let arrayFromBase = sequence.slice().reverse().map((curr, index) => curr * Math.pow(base, index));
    return arrayFromBase.reduce((curr, val) => curr + val);
  };
  
  function decimalToBase (number=0, base=0) {
    let ref = number;
    let arrayResult = [];
    while (ref > 0){
      if (ref < base) {
        arrayResult.push(ref);
        ref = 0;
      } else {
        arrayResult.push(ref % base);
        ref = Math.floor(ref / base);
      }
    }
    return arrayResult.slice().reverse();
  }
  let result = decimalToBase(baseToDecimal(sequence, fromBase),toBase);
  return (result.length > 0)? result : [0];
};
