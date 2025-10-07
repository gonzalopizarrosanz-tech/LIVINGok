
import React, { useState } from 'react';
import type { Question } from '../types';

interface QuestionScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({ question, questionNumber, totalQuestions, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleOptionClick = (index: number) => {
    setSelectedAnswer(index);
    const isCorrect = index === question.correctAnswerIndex;
    
    setTimeout(() => {
        onAnswer(isCorrect);
        setSelectedAnswer(null);
    }, 1000);
  };

  const getButtonClass = (index: number) => {
    if (selectedAnswer === null) {
      return "bg-cyan-500 hover:bg-cyan-400";
    }
    if (index === question.correctAnswerIndex) {
      return "bg-green-500";
    }
    if (index === selectedAnswer && index !== question.correctAnswerIndex) {
      return "bg-red-500";
    }
    return "bg-gray-700 opacity-50";
  };

  return (
    <div className="w-full flex flex-col items-center space-y-8 animate-slide-in">
      <div className="text-xl text-pink-500">
        Pregunta {questionNumber} / {totalQuestions}
      </div>
      <h2 className="text-2xl md:text-3xl leading-relaxed text-white">
        {question.question}
      </h2>
      <div className="w-full grid grid-cols-1 gap-4 pt-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={selectedAnswer !== null}
            className={`w-full p-4 text-lg text-black border-4 border-black transition-all duration-300 ${getButtonClass(index)}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionScreen;
