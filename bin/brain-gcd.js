#!/usr/bin/env node
import { getRandomInt } from '../src/utils.js';
import { runGame} from '../src/index.js';

const findGCD = (a, b) => (b === 0 ? a : findGCD(b, a % b));

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  return [`${num1} ${num2}`, String(findGCD(num1, num2))];
};

const description = 'Find the greatest common divisor of given numbers.';

runGame(description, generateRound);