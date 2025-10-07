
import React from 'react';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  resultMessage: string;
  resultEmoji: string;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ score, totalQuestions, resultMessage, resultEmoji, onRestart }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 animate-slide-in">
      <div className="text-7xl">{resultEmoji}</div>
      <h2 className="text-4xl text-cyan-300 text-shadow-neon">RESULTADO</h2>
      <p className="text-2xl text-white">
        Acertaste {score} de {totalQuestions} preguntas
      </p>
      <p className="text-lg text-white max-w-md leading-relaxed">
        {resultMessage}
      </p>
      <button
        onClick={onRestart}
        className="px-8 py-4 mt-4 text-xl text-black bg-pink-500 border-4 border-black hover:bg-pink-400 active:bg-pink-600 transform hover:scale-105 transition-transform duration-200 ease-in-out box-shadow-neon"
      >
        VOLVER A JUGAR
      </button>
    </div>
  );
};

export default ResultScreen;
