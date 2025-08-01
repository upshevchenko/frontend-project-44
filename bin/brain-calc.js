#!/usr/bin/env node
import { runGame } from '../src/index.js';
import { getRandomInt } from '../src/utils.js';

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const a = getRandomInt(1, 25);
  const b = getRandomInt(1, 25);
  const operator = ['+', '-', '*'][getRandomInt(0, 2)]; 
  const question = `${a} ${operator} ${b}`;
  const answer = String(calculate(a, b, operator));
  
  return [question, answer];
};

const description = 'What is the result of the expression?';

export default () => runGame(description, generateRound);