import readlineSync from 'readline-sync';

export function welcomeUser() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}