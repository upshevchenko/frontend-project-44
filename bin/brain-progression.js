#!/usr/bin/env node
import { runGame, getRandomInt } from '../src/index.js';

const generateProgression = (start, step, length) => {
  return Array.from({ length }, (_, i) => start + i * step);
};

const generateRound = () => {
  const start = getRandomInt(1, 50);
  const step = getRandomInt(1, 10);
  const length = getRandomInt(5, 10);
  const progression = generateProgression(start, step, length);
  const hiddenIndex = getRandomInt(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  
  const question = progression
    .map((num, i) => (i === hiddenIndex ? '..' : num))
    .join(' ');

  return [question, correctAnswer];
};

const description = 'What number is missing in the progression?';

runGame(description, generateRound);