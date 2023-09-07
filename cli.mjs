import { call } from './index.mjs';

const fn = process.argv[2];
const chunks = [];

process.stdin.on('data', (c) => chunks.push(c));
process.stdin.on('end', () => call(fn, Buffer.concat(chunks).toString('utf8')));