import { getRandomInt } from '../utils.js';

const PROGRESSION_CONFIG = {
  MIN_START: 1,
  MAX_START: 50,
  MIN_STEP: 1,
  MAX_STEP: 10,
  MIN_LENGTH: 5,
  MAX_LENGTH: 10,
};

const generateProgression = (start, step, length) => {
  return Array.from({ length }, (_, i) => start + i * step);
};

export const description = 'What number is missing in the progression?';

export const generateRound = () => {
  const { 
    MIN_START, MAX_START, 
    MIN_STEP, MAX_STEP, 
    MIN_LENGTH, MAX_LENGTH 
  } = PROGRESSION_CONFIG;

  const start = getRandomInt(MIN_START, MAX_START);
  const step = getRandomInt(MIN_STEP, MAX_STEP);
  const length = getRandomInt(MIN_LENGTH, MAX_LENGTH);
  
  const progression = generateProgression(start, step, length);
  const hiddenIndex = getRandomInt(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  
  const question = progression
    .map((num, i) => (i === hiddenIndex ? '..' : num))
    .join(' ');

  return [question, correctAnswer];
};