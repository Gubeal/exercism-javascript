//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const GIGAMILISECOND = 1000000000000;
  let lastDate = new Date(GIGAMILISECOND + date.getTime());
  return new Date(Date.parse(lastDate.toISOString()));
};
