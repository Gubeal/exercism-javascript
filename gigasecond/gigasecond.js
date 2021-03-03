const GIGAMILISECOND = 1000000000000;

export const gigasecond = (date) => {
  return new Date(Date.parse(new Date(GIGAMILISECOND + date.getTime()).toISOString()));
};
