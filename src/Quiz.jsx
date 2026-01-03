import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Quiz({quiz, setQuiz}) {
  const quizQuestions = quiz;
  
  // answers = { 0: { selected: 1, isCorrect: true }, 1: { selected: 2, isCorrect: false } }
  const [answers, setAnswers] = useState({});

  const handleAnswerClick = (questionIndex, answerIndex, isCorrect) => {
    // agar bu savolga javob berilgan bo‘lsa – qayta bosilmasin
    if (answers[questionIndex]) return;

    setAnswers(prev => ({
      ...prev,
      [questionIndex]: {
        selected: answerIndex,
        isCorrect
      }
    }));
  };

  const score = Object.values(answers).filter(a => a.isCorrect).length;

  const getAnswerButtonClass = (questionIndex, answerOption, index) => {
    const base =
      "w-full py-4 px-4 text-left border rounded-lg text-lg transition duration-300 shadow-md ";

    const userAnswer = answers[questionIndex];

    // hali javob tanlanmagan
    if (!userAnswer) {
      return (
        base +
        "border-gray-300 text-gray-700 hover:bg-indigo-100 hover:border-indigo-500"
      );
    }

    // tanlangan variant
    if (index === userAnswer.selected) {
      if (answerOption.isCorrect) {
        return base + "bg-green-500 text-white animate-pulse";
      } else {
        return base + "bg-red-500 text-white animate-shake";
      }
    }

    // to‘g‘ri javob (tanlanmagan bo‘lsa ham)
    if (answerOption.isCorrect) {
      return base + "border-green-500 text-green-600";
    }

    // qolganlari
    return base + "bg-gray-200 text-gray-400";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6">
        <p onClick={() => setQuiz(false)} className="text-red-500 text-lg mb-4 inline-block cursor-pointer">
          ⬅ Chiqish
        </p>

        {/* SCORE */}
        <div className="mb-6 text-xl font-semibold text-indigo-600">
          Natija: {score} / {quizQuestions.length}
        </div>

        {/* QUESTIONS */}
        <div className="space-y-10">
          {quizQuestions.map((question, qIndex) => (
            <div
              key={qIndex}
              className="border-b pb-6 last:border-none"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {qIndex + 1}. {question.questionText}
              </h2>

              <div className="space-y-3">
                {question.answerOptions.map((answerOption, aIndex) => (
                  <button
                    key={aIndex}
                    disabled={!!answers[qIndex]}
                    onClick={() =>
                      handleAnswerClick(
                        qIndex,
                        aIndex,
                        answerOption.isCorrect
                      )
                    }
                    className={getAnswerButtonClass(
                      qIndex,
                      answerOption,
                      aIndex
                    )}
                  >
                    <span className="font-bold mr-2">
                      {String.fromCharCode(65 + aIndex)}.
                    </span>
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FINISH */}
        {Object.keys(answers).length === quizQuestions.length && (
          <div className="mt-10 text-center">
            <h3 className="text-3xl font-bold text-green-600">
              Test yakunlandi 🎉
            </h3>
            <p className="text-xl mt-2">
              Siz {score} ta savolga to‘g‘ri javob berdingiz
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
