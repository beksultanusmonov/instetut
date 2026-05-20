import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuizScope } from './hooks/useQuizScope';
import { useQuiz } from './QuizContext';
import {
  buildTestSearchParams,
  filterQuizQuestions,
  getQuizByType,
  getQuizMeta,
  isValidQuizType,
} from './utils/quizUtils';

function Quiz() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isSecret, homePath, selectPath, testPath } = useQuizScope();
  const { answers, setAnswer, resetAnswers } = useQuiz();

  const quizType = searchParams.get('quiz');
  const mode = searchParams.get('mode');
  const chunk = searchParams.get('chunk');
  const reshuffleKey = searchParams.get('t');

  const allQuestions = useMemo(
    () => getQuizByType(quizType, isSecret) ?? [],
    [quizType, isSecret]
  );
  const meta = getQuizMeta(quizType, isSecret);

  const quizData = useMemo(
    () => filterQuizQuestions(allQuestions, mode, chunk),
    [allQuestions, mode, chunk, reshuffleKey]
  );

  const [loadedKey, setLoadedKey] = useState('');

  useEffect(() => {
    if (!isValidQuizType(quizType, isSecret)) {
      navigate(homePath);
      return;
    }
    if (!mode || !['all', 'random', 'range'].includes(mode)) {
      navigate(`${selectPath}?quiz=${quizType}`);
      return;
    }
    if (mode === 'range' && (chunk === null || chunk === '')) {
      navigate(`${selectPath}?quiz=${quizType}`);
      return;
    }
    if (quizData.length === 0) {
      navigate(`${selectPath}?quiz=${quizType}`);
      return;
    }

    const key = `${quizType}-${mode}-${chunk ?? ''}-${reshuffleKey ?? ''}`;
    if (loadedKey !== key) {
      resetAnswers();
      setLoadedKey(key);
    }
  }, [quizType, mode, chunk, reshuffleKey, quizData.length, navigate, resetAnswers, loadedKey, isSecret, homePath, selectPath]);

  const handleAnswerClick = (questionIndex, answerIndex) => {
    if (answers[questionIndex]) return;

    const question = quizData[questionIndex];
    const selectedOption = question.answerOptions[answerIndex];
    const isCorrect = selectedOption.isCorrect;

    setAnswer(questionIndex, {
      selectedIndex: answerIndex,
      isCorrect: isCorrect,
      questionText: question.questionText,
      selectedAnswer: selectedOption.answerText,
      correctAnswer: question.answerOptions.find((opt) => opt.isCorrect).answerText,
    });
  };

  const score = Object.values(answers).filter((a) => a.isCorrect).length;
  const answeredCount = Object.keys(answers).length;

  const rangeLabel = useMemo(() => {
    if (mode !== 'range' || chunk === null) return '';
    const start = Number(chunk) * 25;
    return `Savollar ${start + 1}–${start + quizData.length}`;
  }, [mode, chunk, quizData.length]);

  const modeLabel =
    mode === 'random' ? 'Random 25 ta' : mode === 'range' ? rangeLabel : 'Barcha testlar';

  if (!isValidQuizType(quizType) || quizData.length === 0) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Savollar yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 py-4 md:py-8">
      <div className="max-w-4xl mx-auto px-3 md:px-4">
        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <button
              onClick={() => navigate(`${selectPath}?quiz=${quizType}`)}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors text-sm md:text-base"
            >
              <svg className="h-4 w-4 md:h-5 md:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Rejimni o&apos;zgartirish</span>
              <span className="sm:hidden">Orqaga</span>
            </button>
            <div className="text-center sm:text-right">
              <div className="text-xl md:text-2xl font-bold text-gray-900">
                {score} / {quizData.length}
              </div>
              <div className="text-xs md:text-sm text-gray-600">To&apos;g&apos;ri javoblar</div>
            </div>
          </div>

          {meta && (
            <div className="mb-4 pb-4 border-b border-gray-100">
              <h1 className="text-lg md:text-xl font-bold text-gray-900">{meta.title}</h1>
              <p className="text-sm text-blue-700 font-medium mt-1">{modeLabel}</p>
            </div>
          )}

          <div className="w-full bg-gray-200 rounded-full h-2 md:h-3 mb-3 md:mb-4">
            <div
              className="bg-linear-to-r from-blue-500 to-purple-600 h-2 md:h-3 rounded-full transition-all duration-500"
              style={{ width: `${(answeredCount / quizData.length) * 100}%` }}
            ></div>
          </div>

          <div className="text-xs md:text-sm text-gray-600 text-center">
            {answeredCount} / {quizData.length} savol javob berildi
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {quizData.map((question, qIndex) => (
            <div
              key={qIndex}
              className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8 border border-gray-100"
            >
              <div className="flex items-start mb-4 md:mb-6">
                <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-blue-100 text-blue-800 rounded-full text-sm md:text-lg font-semibold mr-3 md:mr-4 shrink-0">
                  {qIndex + 1}
                </span>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-relaxed">
                  {question.questionText}
                </h2>
              </div>

              <div className="space-y-2 md:space-y-3 px-2 md:px-0 md:ml-14">
                {question.answerOptions.map((answerOption, aIndex) => (
                  <div key={aIndex} className="relative">
                    <button
                      disabled={!!answers[qIndex]}
                      onClick={() => handleAnswerClick(qIndex, aIndex)}
                      className={`w-[96%] md:w-full p-3 md:p-4 text-left rounded-lg md:rounded-xl border-2 transition-all duration-300 font-medium flex items-center text-sm md:text-base ${
                        !answers[qIndex]
                          ? 'border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:shadow-md'
                          : answers[qIndex].selectedIndex === aIndex
                            ? answerOption.isCorrect
                              ? 'bg-green-50 border-green-300 text-green-800 shadow-lg'
                              : 'bg-red-50 border-red-300 text-red-800 shadow-lg'
                            : answerOption.isCorrect
                              ? 'border-green-300 text-green-700 bg-green-50'
                              : 'bg-gray-50 border-gray-200 text-gray-400'
                      }`}
                    >
                      <span className="inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-white border-2 mr-3 md:mr-4 font-semibold text-xs md:text-sm border-current shrink-0">
                        {String.fromCharCode(65 + aIndex)}
                      </span>
                      <span className="flex-1 text-left text-sm md:text-base">
                        {answerOption.answerText}
                      </span>
                      {answers[qIndex] && answerOption.isCorrect && (
                        <svg
                          className="h-5 w-5 md:h-6 md:w-6 text-green-600 ml-2 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                      {answers[qIndex] &&
                        answers[qIndex].selectedIndex === aIndex &&
                        !answerOption.isCorrect && (
                          <svg
                            className="h-5 w-5 md:h-6 md:w-6 text-red-600 ml-2 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                    </button>
                  </div>
                ))}
              </div>

              {answers[qIndex] && !answers[qIndex].isCorrect && (
                <div className="mt-3 md:mt-4 p-3 md:p-4 bg-red-50 border border-red-200 rounded-lg md:rounded-xl px-2 md:px-0 md:ml-14">
                  <div className="flex items-center mb-2">
                    <svg
                      className="h-4 w-4 md:h-5 md:w-5 text-red-600 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-semibold text-red-800 text-sm md:text-base">
                      Noto&apos;g&apos;ri javob
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-700">
                    To&apos;g&apos;ri javob:{' '}
                    <span className="font-medium text-green-700">
                      {answers[qIndex].correctAnswer}
                    </span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {answeredCount === quizData.length && (
          <div className="mt-8 md:mt-12 bg-white rounded-xl md:rounded-2xl shadow-lg p-6 md:p-8 text-center">
            <div className="text-4xl md:text-6xl mb-4 md:mb-6">
              {score >= quizData.length * 0.8 ? '🎉' : score >= quizData.length * 0.6 ? '👍' : '💪'}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
              Test yakunlandi!
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              Siz {quizData.length} savoldan {score} tasiga to&apos;g&apos;ri javob berdingiz.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <button
                onClick={() => {
                  resetAnswers();
                  if (mode === 'random') {
                    navigate(
                      `${testPath}?${buildTestSearchParams(quizType, mode)}&t=${Date.now()}`
                    );
                  } else {
                    window.scrollTo(0, 0);
                  }
                }}
                className="px-6 md:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-base md:text-lg"
              >
                {mode === 'random' ? 'Yangi random 25' : "Qayta urinish"}
              </button>
              <button
                onClick={() => navigate(homePath)}
                className="px-6 md:px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium text-base md:text-lg"
              >
                Bosh sahifaga
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
