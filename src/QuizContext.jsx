import React, { createContext, useContext, useState, useCallback } from 'react';

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [answers, setAnswers] = useState({});

  const setAnswer = (questionIndex, answerData) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: answerData
    }));
  };

  const resetAnswers = useCallback(() => {
    setAnswers({});
  }, []);

  return (
    <QuizContext.Provider value={{
      answers,
      setAnswer,
      resetAnswers
    }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}