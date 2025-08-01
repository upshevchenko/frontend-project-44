#!/usr/bin/env node
import { getRandomInt } from '../src/utils.js';
import { runGame } from '../src/index.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const question = getRandomInt(2, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question.toString(), correctAnswer];
};
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => runGame(description, generateRound);