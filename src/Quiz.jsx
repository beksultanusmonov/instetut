import React, { useState } from 'react';
// Iltimos, bu yerda o'zingizning to'g'ri quizQuestions import yo'lingizni ishlating
// Masalan: import { quizQuestions } from './data/quizQuestions'; 
import quizQuestions from './data/quizQuestions'; 
import { Link } from 'react-router-dom';

const NEXT_QUESTION_DELAY = 1000; // Keyingi savolga o'tish uchun kechikish (millisekundda)

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // Yangi holatlar
  const [answerSelected, setAnswerSelected] = useState(false); // Javob tanlanganligini bildiruvchi holat
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null); // Tanlangan variant indeksi

  // Keyingi savolga o'tish mantiqi
  const moveToNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;

    // Holatlarni qayta tiklash
    setAnswerSelected(false);
    setSelectedAnswerIndex(null);

    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true); // Test tugadi
    }
  };

  // Javobni boshqarish funksiyasi
  const handleAnswerOptionClick = (isCorrect, index) => {
    // Agar javob allaqachon tanlangan bo'lsa, qayta bosishni e'tiborsiz qoldiramiz
    if (answerSelected) return;

    setAnswerSelected(true);
    setSelectedAnswerIndex(index);

    if (isCorrect) {
      setScore(score + 1);
    }
    
    // Kechikish bilan keyingi savolga o'tish
    setTimeout(() => {
      moveToNextQuestion();
    }, NEXT_QUESTION_DELAY);
  };
  
  // Testni qayta boshlash funksiyasi
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setAnswerSelected(false);
    setSelectedAnswerIndex(null);
  };

  // Har bir variant uchun dinamik CSS klassini aniqlaydigan funksiya
  const getAnswerButtonClass = (answerOption, index) => {
    let baseClasses = "w-full py-4 px-4 text-left border rounded-lg text-lg transition duration-200 shadow-md ";

    if (!answerSelected) {
      // Javob tanlanmagan holat: oddiy, hover effekti bor
      return baseClasses + "border-gray-300 text-gray-700 hover:bg-indigo-100 hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50";
    }

    // Javob tanlangan holat
    if (index === selectedAnswerIndex) {
      // Foydalanuvchi tanlagan variant
      if (answerOption.isCorrect) {
        // To'g'ri tanlov (Yashil)
        return baseClasses + "bg-green-500 border-green-700 text-white pointer-events-none";
      } else {
        // Noto'g'ri tanlov (Qizil)
        return baseClasses + "bg-red-500 border-red-700 text-white pointer-events-none";
      }
    } else if (answerOption.isCorrect) {
      // Tanlanmagan, lekin bu variant to'g'ri bo'lsa (yashil chegara)
      return baseClasses + "border-green-500 bg-white text-green-700 pointer-events-none";
    } else {
      // Tanlanmagan va noto'g'ri (rangsiz)
      return baseClasses + "border-gray-300 bg-gray-200 text-gray-500 pointer-events-none";
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 relative">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-8">
        
        {showScore ? (
          /* ==================== Natija Ekrani ==================== */
          <div className="text-center">
             {/* ... Natija Ekraningizning qolgan qismi ... */}
             <h1 className="text-3xl font-bold text-indigo-600 mb-4">
              Test Yakunlandi! 🎉
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Siz {quizQuestions.length} ta savoldan 
              <span className="font-extrabold text-green-500 mx-1">{score}</span> 
              tasiga to'g'ri javob berdingiz.
            </p>
            <button
              onClick={restartQuiz}
              className="w-full py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
            >
              Qayta boshlash
            </button>
          </div>
        ) : (
          /* ==================== Savol Ekrani ==================== */
          <>
            {/* ... Progress bar qismi ... */}
            <div className="mb-6">
                <Link to={'/'} className='text-red-500 text-xl'> <i className="fa-solid fa-arrow-left"></i> Chiqish</Link>
                {/* <hr /> */}
              <div className="text-sm font-medium text-indigo-500 mb-1">
                Savol {currentQuestion + 1} / {quizQuestions.length}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-500" 
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="question-section mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 leading-relaxed">
                {quizQuestions[currentQuestion].questionText}
              </h2>
            </div>

            <div className="answer-section space-y-4">
              {quizQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                  key={index}
                  // Funksiyaga variant indeksi ham uzatiladi
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
                  // Dinamik klassni chaqirish
                  className={getAnswerButtonClass(answerOption, index)}
                  // Javob tanlangan bo'lsa, tugmalarni bosib bo'lmaydi
                  disabled={answerSelected}
                >
                  <span className="font-bold mr-2 text-inherit">
                    {String.fromCharCode(65 + index)}: 
                  </span>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;