//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (integer) => {
  if (typeof integer === 'number'){
    let number = integer;
    let romanNumber = ''
    while (number !== 0) {
      switch (true){
        case (number >= 1000): 
          if (number >= 4000 && number < 5000) {
            romanNumber += '__IV';
            number -= 4000;
          } else {
            romanNumber += 'M';
            number -= 1000;
          }
          break;
        case (number >= 500): 
          if (number >= 900 && number < 1000) {
            romanNumber += 'CM';
            number -= 900;
          } else {
            romanNumber += 'D';
            number -= 500;
          }
          break;
        case (number >= 100):
          if (number >= 400 && number < 500) {
            romanNumber += 'CD';
            number -= 400;
          } else {
            romanNumber += 'C';
            number -= 100;
          }
          break;
        case (number >= 50): ;
          if (number >= 90 && number < 100) {
            romanNumber += 'XC';
            number -= 90;
          } else {
            romanNumber += 'L'
            number -= 50;
          }
          break;
        case (number >= 10): 
          if (number >= 40 && number < 50) {
            romanNumber += 'XL';
            number -= 40;
          } else {
            romanNumber += 'X';
            number -= 10;
          }
          break;
        case (number >= 5): 
          if (number >= 9 && number < 10) {
            romanNumber += 'IX';
            number -= 9;
          } else {
            romanNumber += 'V';
            number -= 5;
          }
          break;
        case (number >= 1): 
          if (number >= 4 && number < 5) {
            romanNumber += 'IV';
            number -= 4;
          } else {
            romanNumber += 'I';
            number -= 1;
          }
          break;
        default: number = 0;
      }
   }
   return romanNumber
  }
  return
};
