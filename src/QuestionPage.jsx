import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { bazaQuiz, enterpriseQuiz, kiberXavfsizlikQuiz, quizCyberYakuniy, quizQuestions, quizTarmoq, suniyIntelektQuiz } from './data/quizQuestions';
import { useQuiz } from './QuizContext';

function QuestionPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { answers, setAnswer } = useQuiz();
  const quizType = searchParams.get('quiz');
  
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const questionIndex = parseInt(id) - 1;
  
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
      case 'kiberxavfsizlik':
        data = kiberXavfsizlikQuiz;
        break;
      case 'suniyintelekt':
        data = suniyIntelektQuiz;
        break;
      case 'cyberyakuniy':
        data = quizCyberYakuniy;
        break;
      default:
        navigate('/');
        return;
    }
    setQuizData(data);
    
    if (data[questionIndex]) {
      setCurrentQuestion(data[questionIndex]);
      const existingAnswer = answers[questionIndex];
      if (existingAnswer) {
        setSelectedAnswer(existingAnswer.selectedIndex);
        setShowFeedback(true);
      }
    } else {
      navigate('/');
    }
  }, [quizType, questionIndex, answers, navigate]);
  
  const handleAnswerSelect = (answerIndex) => {
    if (showFeedback) return; // Don't allow changing answer after feedback
    
    setSelectedAnswer(answerIndex);
    const isCorrect = currentQuestion.answerOptions[answerIndex].isCorrect;
    
    setAnswer(questionIndex, {
      selectedIndex: answerIndex,
      isCorrect: isCorrect,
      questionText: currentQuestion.questionText,
      selectedAnswer: currentQuestion.answerOptions[answerIndex].answerText,
      correctAnswer: currentQuestion.answerOptions.find(opt => opt.isCorrect).answerText
    });
    
    setShowFeedback(true);
  };
  
  const goToNext = () => {
    if (questionIndex < quizData.length - 1) {
      navigate(`/test/${questionIndex + 2}?quiz=${quizType}`);
    }
  };
  
  const goToPrevious = () => {
    if (questionIndex > 0) {
      navigate(`/test/${questionIndex}?quiz=${quizType}`);
    }
  };
  
  const goToList = () => {
    navigate(`/test?quiz=${quizType}`);
  };
  
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Savol yuklanmoqda...</p>
        </div>
      </div>
    );
  }
  
  const progress = ((questionIndex + 1) / quizData.length) * 100;
  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.values(answers).filter(a => a.isCorrect).length;
  
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={goToList}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Ro'yxatga qaytish
            </button>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{correctCount} / {quizData.length}</div>
              <div className="text-sm text-gray-600">To'g'ri javoblar</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-linear-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="text-sm text-gray-600 text-center">
            Savol {questionIndex + 1} / {quizData.length} • {answeredCount} javob berildi
          </div>
        </div>
        
        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-800 rounded-full text-lg font-semibold mr-4">
                {questionIndex + 1}
              </span>
              <h2 className="text-xl font-bold text-gray-900 leading-relaxed">
                {currentQuestion.questionText}
              </h2>
            </div>
          </div>
          
          {/* Answer Options */}
          <div className="space-y-3">
            {currentQuestion.answerOptions.map((option, index) => {
              let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ";
              
              if (showFeedback) {
                if (option.isCorrect) {
                  buttonClass += "bg-green-50 border-green-300 text-green-800";
                } else if (selectedAnswer === index) {
                  buttonClass += "bg-red-50 border-red-300 text-red-800";
                } else {
                  buttonClass += "bg-gray-50 border-gray-200 text-gray-500";
                }
              } else {
                buttonClass += selectedAnswer === index 
                  ? "bg-blue-50 border-blue-300 text-blue-800" 
                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300";
              }
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  className={buttonClass}
                >
                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 mr-4 font-semibold text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option.answerText}</span>
                    {showFeedback && option.isCorrect && (
                      <svg className="h-6 w-6 text-green-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {showFeedback && selectedAnswer === index && !option.isCorrect && (
                      <svg className="h-6 w-6 text-red-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Feedback */}
          {showFeedback && (
            <div className={`mt-6 p-4 rounded-xl ${
              answers[questionIndex]?.isCorrect 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-center mb-2">
                {answers[questionIndex]?.isCorrect ? (
                  <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <span className={`font-semibold ${
                  answers[questionIndex]?.isCorrect ? 'text-green-800' : 'text-red-800'
                }`}>
                  {answers[questionIndex]?.isCorrect ? 'To\'g\'ri!' : 'Noto\'g\'ri'}
                </span>
              </div>
              {!answers[questionIndex]?.isCorrect && (
                <p className="text-sm text-gray-700">
                  To'g'ri javob: <span className="font-medium text-green-700">{answers[questionIndex]?.correctAnswer}</span>
                </p>
              )}
            </div>
          )}
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={goToPrevious}
            disabled={questionIndex === 0}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
              questionIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Oldingi
          </button>
          
          <button
            onClick={goToList}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Ro'yxatga qaytish
          </button>
          
          <button
            onClick={goToNext}
            disabled={questionIndex === quizData.length - 1}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
              questionIndex === quizData.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Keyingi
            <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;