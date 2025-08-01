#!/usr/bin/env node
import { runGame } from '../src/index.js';
import { getRandomInt } from '../src/utils.js';

const isEven = (num) => num % 2 === 0;
const generateEvenRound = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const playEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(description, generateEvenRound);
};
playEvenGame();
export default playEvenGame;