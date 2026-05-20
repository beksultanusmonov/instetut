import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rawPath = path.join(__dirname, 'secret1c-raw.txt');
const outPath = path.join(__dirname, '..', 'src', 'data', 'secretQuizes.jsx');

const raw = fs.readFileSync(rawPath, 'utf8');
const lines = raw.split(/\r?\n/);

const questions = [];
let current = null;

function pushCurrent() {
  if (current?.questionText && current.answerOptions.length >= 2) {
    questions.push(current);
  }
  current = null;
}

for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed) continue;

  if (trimmed.startsWith('?')) {
    pushCurrent();
    current = {
      questionText: trimmed.slice(1).trim(),
      answerOptions: [],
    };
  } else if (trimmed.startsWith('+')) {
    if (!current) continue;
    current.answerOptions.push({
      answerText: trimmed.slice(1).trim(),
      isCorrect: true,
    });
  } else if (trimmed.startsWith('=')) {
    if (!current) continue;
    current.answerOptions.push({
      answerText: trimmed.slice(1).trim(),
      isCorrect: false,
    });
  } else if (current && current.answerOptions.length === 0) {
    current.answerOptions.push({ answerText: trimmed, isCorrect: true });
  }
}

pushCurrent();

const body = JSON.stringify(questions, null, 2)
  .replace(/"questionText":/g, 'questionText:')
  .replace(/"answerText":/g, 'answerText:')
  .replace(/"isCorrect":/g, 'isCorrect:')
  .replace(/"answerOptions":/g, 'answerOptions:');

const output = `export const secret1cQuiz = ${body};\n`;

fs.writeFileSync(outPath, output, 'utf8');
console.log(`Generated ${questions.length} questions -> ${outPath}`);
