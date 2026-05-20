import {
  bazaQuiz,
  enterpriseQuiz,
  kiberXavfsizlikQuiz,
  quizCyberYakuniy,
  quizQuestions,
  quizTarmoq,
  suniyIntelektQuiz,
} from '../data/quizQuestions';
import { secret1cQuiz } from '../data/secretQuizes';

export const CHUNK_SIZE = 25;

export const QUIZ_META = {
  cyberyakuniy: {
    title: 'Cyber Yakuniy',
    description: "Linux va kiberxavfsizlik bo'yicha yakuniy testlar to'plami",
  },
  suniyintelekt: {
    title: 'Suniy Intelekt Quiz',
    description: "Sun'iy intellekt test yakuniy nazorat uchun",
  },
  kiberxavfsizlik: {
    title: 'Kiber Xavfsizlik',
    description: 'IV semestr KiberXavfsizlik fani uchun oraliq test',
  },
  enterprise: {
    title: '1C Enterprise',
    description: 'IV semestr Test oraliq sinov va yakuniy nazorat uchun',
  },
  baza: {
    title: "Ma'lumotlar Bazasi",
    description: 'III-semestr Yakuniy nazorat uchun',
  },
  tarmoq: {
    title: 'Kompyuter Tarmoqlari',
    description: 'III-semestr Yakuniy nazorat uchun',
  },
  questions: {
    title: "Ma'lumotlar Bazasi",
    description: 'III-semestr 21-kungi test oraliq sinov uchun',
  },
};

export const SECRET_QUIZ_META = {
  secret1c: {
    title: '1C Enterprise',
    description: 'Maxfiy testlar to\'plami — yakuniy nazorat',
  },
};

export function getQuizByType(quizType, isSecret = false) {
  if (isSecret) {
    switch (quizType) {
      case 'secret1c':
        return secret1cQuiz;
      default:
        return null;
    }
  }

  switch (quizType) {
    case 'baza':
      return bazaQuiz;
    case 'tarmoq':
      return quizTarmoq;
    case 'questions':
      return quizQuestions;
    case 'enterprise':
      return enterpriseQuiz;
    case 'kiberxavfsizlik':
      return kiberXavfsizlikQuiz;
    case 'suniyintelekt':
      return suniyIntelektQuiz;
    case 'cyberyakuniy':
      return quizCyberYakuniy;
    default:
      return null;
  }
}

export function getQuizMeta(quizType, isSecret = false) {
  return isSecret ? SECRET_QUIZ_META[quizType] : QUIZ_META[quizType];
}

export function isValidQuizType(quizType, isSecret = false) {
  return Boolean(getQuizByType(quizType, isSecret));
}

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getRangeOptions(total, chunkSize = CHUNK_SIZE) {
  const options = [];
  for (let start = 0; start < total; start += chunkSize) {
    const end = Math.min(start + chunkSize, total);
    options.push({
      chunk: options.length,
      label: `${start + 1}–${end}`,
      start,
      end,
    });
  }
  return options;
}

export function filterQuizQuestions(allQuestions, mode, chunkIndex) {
  if (!allQuestions?.length) return [];

  if (mode === 'random') {
    const count = Math.min(CHUNK_SIZE, allQuestions.length);
    return shuffleArray(allQuestions).slice(0, count);
  }

  if (mode === 'range') {
    const chunk = Number(chunkIndex);
    if (Number.isNaN(chunk) || chunk < 0) return allQuestions;
    const start = chunk * CHUNK_SIZE;
    return allQuestions.slice(start, start + CHUNK_SIZE);
  }

  return allQuestions;
}

export function buildTestSearchParams(quizType, mode, chunk) {
  const params = new URLSearchParams({ quiz: quizType, mode });
  if (mode === 'range' && chunk !== undefined && chunk !== '') {
    params.set('chunk', String(chunk));
  }
  return params.toString();
}
