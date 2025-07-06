#!/usr/bin/env node
import { runGame, getRandomInt } from '../src/index.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
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
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];
  
  const question = `${a} ${operator} ${b}`;
  const answer = String(calculate(a, b, operator));
  
  return [question, answer];
};

const runCalcGame = () => {
  const rules = 'What is the result of the expression?';
  runGame(rules, generateRound);
};

runCalcGame();
