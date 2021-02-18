//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (xDart=0, yDart=0) => {
  let xCenterCircle = 0;
  let yCenterCircle = 0;
  let outerCircle = 100;
  let middleCircle = 25;
  let innerCircle = 1;
  let point = (xDart - xCenterCircle) * (xDart - xCenterCircle) + (yDart - yCenterCircle) * (yDart - yCenterCircle);
  if (point <= innerCircle) {
    return 10;
  } else if (point <= middleCircle) {
    return 5;
  } else if (point <= outerCircle) {
    return 1
  }
  return 0;
};
