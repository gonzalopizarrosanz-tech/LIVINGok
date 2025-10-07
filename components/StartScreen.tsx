
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 animate-slide-in">
      <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight text-shadow-neon text-cyan-300">
        LIVING 90's<br/>TRIVIAL
      </h1>
      <button
        onClick={onStart}
        className="px-8 py-4 text-2xl text-black bg-pink-500 border-4 border-black hover:bg-pink-400 active:bg-pink-600 transform hover:scale-105 transition-transform duration-200 ease-in-out box-shadow-neon"
      >
        JUGAR
      </button>
    </div>
  );
};

export default StartScreen;
