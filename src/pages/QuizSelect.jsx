import { useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useQuizScope } from '../hooks/useQuizScope';
import {
  CHUNK_SIZE,
  buildTestSearchParams,
  getQuizByType,
  getQuizMeta,
  getRangeOptions,
  isValidQuizType,
} from '../utils/quizUtils';

function QuizSelect() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isSecret, homePath, testPath } = useQuizScope();
  const quizType = searchParams.get('quiz');

  const allQuestions = useMemo(
    () => getQuizByType(quizType, isSecret) ?? [],
    [quizType, isSecret]
  );
  const meta = getQuizMeta(quizType, isSecret);
  const rangeOptions = useMemo(
    () => getRangeOptions(allQuestions.length),
    [allQuestions.length]
  );

  const [mode, setMode] = useState('all');
  const [chunk, setChunk] = useState('0');

  if (!isValidQuizType(quizType, isSecret) || !meta) {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Test topilmadi</p>
          <Link to={homePath} className="btn btn-primary">
            Bosh sahifaga
          </Link>
        </div>
      </div>
    );
  }

  const handleStart = () => {
    if (mode === 'range' && rangeOptions.length === 0) return;
    const chunkParam = mode === 'range' ? chunk : undefined;
    navigate(`${testPath}?${buildTestSearchParams(quizType, mode, chunkParam)}`);
  };

  const selectedCount =
    mode === 'all'
      ? allQuestions.length
      : mode === 'random'
        ? Math.min(CHUNK_SIZE, allQuestions.length)
        : (rangeOptions[Number(chunk)]?.end ?? 0) - (rangeOptions[Number(chunk)]?.start ?? 0);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 py-8 md:py-12">
      <div className="max-w-xl mx-auto px-4">
        <button
          type="button"
          onClick={() => navigate(homePath)}
          className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mb-6 text-sm md:text-base"
        >
          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Bosh sahifaga
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{meta.title}</h1>
          <p className="text-gray-600 text-sm md:text-base mb-1">{meta.description}</p>
          <p className="text-sm text-gray-500 mb-8">
            Jami {allQuestions.length} ta savol mavjud
          </p>

          <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
            Test rejimini tanlang
          </p>

          <div className="space-y-3 mb-6">
            <label
              className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                mode === 'all'
                  ? 'border-blue-500 bg-blue-50/50 shadow-sm'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="quiz-mode"
                value="all"
                checked={mode === 'all'}
                onChange={() => setMode('all')}
                className="radio radio-primary mt-1"
              />
              <div>
                <span className="font-semibold text-gray-900 block">Barcha testlar</span>
                <span className="text-sm text-gray-600">
                  Barcha {allQuestions.length} ta savol ketma-ket chiqadi
                </span>
              </div>
            </label>

            <label
              className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                mode === 'random'
                  ? 'border-blue-500 bg-blue-50/50 shadow-sm'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="quiz-mode"
                value="random"
                checked={mode === 'random'}
                onChange={() => setMode('random')}
                className="radio radio-primary mt-1"
              />
              <div>
                <span className="font-semibold text-gray-900 block">Random 25 ta</span>
                <span className="text-sm text-gray-600">
                  Tasodifiy tanlangan {Math.min(CHUNK_SIZE, allQuestions.length)} ta savol
                </span>
              </div>
            </label>

            {rangeOptions.length > 0 && (
              <div
                className={`p-4 rounded-xl border-2 transition-all ${
                  mode === 'range'
                    ? 'border-blue-500 bg-blue-50/50 shadow-sm'
                    : 'border-gray-200'
                }`}
              >
                <label className="flex items-start gap-4 cursor-pointer mb-3">
                  <input
                    type="radio"
                    name="quiz-mode"
                    value="range"
                    checked={mode === 'range'}
                    onChange={() => setMode('range')}
                    className="radio radio-primary mt-1"
                  />
                  <div>
                    <span className="font-semibold text-gray-900 block">
                      Oraliq bo&apos;yicha (25 tadan)
                    </span>
                    <span className="text-sm text-gray-600">
                      Savollar ro&apos;yxatidan kerakli qismni tanlang
                    </span>
                  </div>
                </label>

                <select
                  className="select select-bordered w-full"
                  value={chunk}
                  onChange={(e) => {
                    setChunk(e.target.value);
                    setMode('range');
                  }}
                  disabled={mode !== 'range'}
                >
                  {rangeOptions.map((opt) => (
                    <option key={opt.chunk} value={String(opt.chunk)}>
                      Savollar {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleStart}
            className="w-full py-3 md:py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold text-base md:text-lg shadow-md hover:shadow-lg"
          >
            Testni boshlash ({selectedCount} ta savol)
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizSelect;