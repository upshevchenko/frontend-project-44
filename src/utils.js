export const getRandomInt = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Parameters must be numbers');
  }
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  if (minInt > maxInt) {
    throw new RangeError('Min value cannot be greater than max');
  }
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};