#!/usr/bin/env node
import runGame from '../src/index.js';
import { description, generateRound } from '../src/games/prime.js';

runGame(description, generateRound);