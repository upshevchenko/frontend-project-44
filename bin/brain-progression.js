#!/usr/bin/env node
import runGame from '../src/index.js';
import { description, generateRound } from '../src/games/progression.js';

runGame(description, generateRound);