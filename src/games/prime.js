import { getRandomInt } from '../utils.js';

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3, max = Math.sqrt(num); i <= max; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generateRound = () => {
  const question = getRandomInt(2, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question.toString(), answer];
};