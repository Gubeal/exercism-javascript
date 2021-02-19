export const encode = (msg='') => {
  const LETTERS = /^[A-Z ]+$/;
  let result = msg;
  if (LETTERS.test(msg.toUpperCase())) {
    result = '';
    let ref = '';
    let count = 0;
    for (let i = 0; i <= msg.length; i++){
      if (i == 0) ref = msg[i];
      if (ref == msg[i]) {
        count++;
      } else {
        if (count == 1) {
          result += ref;
        } else {
          result += count + ref;
        }
        count = 1;
        ref = msg[i];
      }
    }
  }
  return result;
};

export const decode = (msg='') => {
  const NUMBERS = /^[0-9]+$/;
  const NUMBERS_LETTERS = /^[0-9A-Z ]+$/;
  let result = msg;
  
  if (NUMBERS_LETTERS.test(msg.toUpperCase())){
    result = '';
    let numberLetters = '';
    for (let i = 0; i<msg.length; i++) {
      if (NUMBERS.test(msg[i])){
        numberLetters += msg[i];
      } else {
        if (i == 0) {
          result += msg[i];
        } else {
          if (NUMBERS.test(msg[i-1])) {
            for (let c = 0; c<parseInt(numberLetters); c++) {
              result += msg[i];
            }
            numberLetters = '';
          } else {
            result += msg[i];
          }
        }
      }
    }
  }
  return result;
};
