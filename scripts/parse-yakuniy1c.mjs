import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rawPath = path.join(__dirname, 'yakuniy1c-raw.txt');
const raw = fs.readFileSync(rawPath, 'utf8');

const questions = [];
let current = null;

for (const line of raw.split(/\r?\n/)) {
  const trimmed = line.trim();
  if (!trimmed) continue;

  if (trimmed.startsWith('?')) {
    if (current?.answerOptions?.length) questions.push(current);
    let q = trimmed.slice(1).trim();
    if (!q.endsWith('?')) q += '?';
    current = { questionText: q, answerOptions: [] };
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
  }
}
if (current?.answerOptions?.length) questions.push(current);

const invalid = questions.filter(
  (q) => !q.answerOptions.some((o) => o.isCorrect) || q.answerOptions.length < 2
);
if (invalid.length) {
  console.error('Invalid questions:', invalid.length);
  invalid.slice(0, 5).forEach((q) => console.error(q.questionText, q.answerOptions.length));
  process.exit(1);
}

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
}

let out = 'export const yakuniy1cQuiz = [\n';
for (const q of questions) {
  out += '  {\n';
  out += `    questionText: '${esc(q.questionText)}',\n`;
  out += '    answerOptions: [\n';
  for (const o of q.answerOptions) {
    out += `      { answerText: '${esc(o.answerText)}', isCorrect: ${o.isCorrect} },\n`;
  }
  out += '    ],\n';
  out += '  },\n';
}
out += '];\n';

const quizPath = path.join(__dirname, '..', 'src', 'data', 'yakuniy1cQuiz.generated.jsx');
fs.writeFileSync(quizPath, out, 'utf8');
console.log(`Parsed ${questions.length} questions -> ${quizPath}`);
