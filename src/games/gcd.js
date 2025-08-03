import { getRandomInt } from '../utils.js';

const findGCD = (a, b) => (b === 0 ? a : findGCD(b, a % b));

export const description = 'Find the greatest common divisor of given numbers.';

export const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  return [`${num1} ${num2}`, String(findGCD(num1, num2))];
};