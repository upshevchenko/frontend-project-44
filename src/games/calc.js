import { getRandomInt } from '../utils.js'

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    default: throw new Error(`Unknown operator: ${operator}`)
  }
}

export const description = 'What is the result of the expression?'

export const generateRound = () => {
  const a = getRandomInt(1, 25)
  const b = getRandomInt(1, 25)
  const operator = ['+', '-', '*'][getRandomInt(0, 2)]
  const question = `${a} ${operator} ${b}`
  const answer = String(calculate(a, b, operator))
  return [question, answer]
}
