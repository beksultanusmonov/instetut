import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { bazaQuiz, enterpriseQuiz, quizQuestions, quizTarmoq } from './data/quizQuestions';
import { useQuiz } from './QuizContext';

function QuizList() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { answers, resetAnswers } = useQuiz();
  const quizType = searchParams.get('quiz');
  
  const [quizData, setQuizData] = useState([]);
  
  useEffect(() => {
    let data = [];
    switch (quizType) {
      case 'baza':
        data = bazaQuiz;
        break;
      case 'tarmoq':
        data = quizTarmoq;
        break;
      case 'questions':
        data = quizQuestions;
        break;
      case 'enterprise':
        data = enterpriseQuiz;
        break;
      default:
        navigate('/');
        return;
    }
    setQuizData(data);
  }, [quizType, navigate]);

  const score = Object.values(answers).filter(a => a.isCorrect).length;

  const getQuestionStatus = (qIndex) => {
    const userAnswer = answers[qIndex];
    if (!userAnswer) return 'not-answered';
    return userAnswer.isCorrect ? 'correct' : 'incorrect';
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Orqaga
            </button>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{score} / {quizData.length}</div>
              <div className="text-sm text-gray-600">To'g'ri javoblar</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-linear-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(Object.keys(answers).length / quizData.length) * 100}%` }}
            ></div>
          </div>
          
          <div className="text-sm text-gray-600">
            {Object.keys(answers).length} / {quizData.length} savol javob berildi
          </div>
        </div>

        {/* Questions List */}
        <div className="grid gap-4">
          {quizData.map((question, qIndex) => {
            const status = getQuestionStatus(qIndex);
            return (
              <Link
                key={qIndex}
                to={`/test/${qIndex + 1}?quiz=${quizType}`}
                className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mr-3">
                          {qIndex + 1}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                          {question.questionText}
                        </h3>
                      </div>
                      
                      {/* Answer Options Preview */}
                      <div className="ml-11 space-y-1">
                        {question.answerOptions.slice(0, 2).map((option, aIndex) => (
                          <div key={aIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="font-medium mr-2">{String.fromCharCode(65 + aIndex)}.</span>
                            <span className="line-clamp-1">{option.answerText}</span>
                          </div>
                        ))}
                        {question.answerOptions.length > 2 && (
                          <div className="text-sm text-gray-400">+{question.answerOptions.length - 2} variantlar</div>
                        )}
                      </div>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="ml-4">
                      {status === 'correct' && (
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                      {status === 'incorrect' && (
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      )}
                      {status === 'not-answered' && (
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Summary */}
        {Object.keys(answers).length === quizData.length && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-4">
              {score >= quizData.length * 0.8 ? '🎉' : score >= quizData.length * 0.6 ? '👍' : '💪'}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Test tugadi!
            </h3>
            <p className="text-gray-600 mb-4">
              Siz {quizData.length} savoldan {score} tasiga to'g'ri javob berdingiz.
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => {
                  resetAnswers();
                  window.scrollTo(0, 0);
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Qayta urinish
              </button>
              <button 
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
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

export default QuizList;