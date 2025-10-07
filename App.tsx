
import React, { useState, useCallback } from 'react';
import { GameState } from './types';
import type { Question } from './types';
import { QUESTIONS, WIN_MESSAGE, LOSE_MESSAGE } from './constants';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import VhsBackground from './components/VhsBackground';
import AudioControl from './components/AudioControl';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startGame = useCallback(() => {
    setGameState(GameState.Playing);
    setCurrentQuestionIndex(0);
    setScore(0);
  }, []);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < QUESTIONS.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setGameState(GameState.Result);
    }
  }, [currentQuestionIndex]);
  
  const restartGame = useCallback(() => {
    setGameState(GameState.Start);
  }, []);

  const renderContent = () => {
    switch (gameState) {
      case GameState.Playing:
        return (
          <QuestionScreen
            question={QUESTIONS[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={QUESTIONS.length}
            onAnswer={handleAnswer}
          />
        );
      case GameState.Result:
        const resultMessage = score >= 3 ? WIN_MESSAGE : LOSE_MESSAGE;
        const resultEmoji = score >= 3 ? '🎉' : '😅';
        return (
          <ResultScreen
            score={score}
            totalQuestions={QUESTIONS.length}
            resultMessage={resultMessage}
            resultEmoji={resultEmoji}
            onRestart={restartGame}
          />
        );
      case GameState.Start:
      default:
        return <StartScreen onStart={startGame} />;
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden bg-black font-press-start">
      <VhsBackground />
      <AudioControl src="https://cdn.pixabay.com/audio/2022/08/04/audio_3525381f2a.mp3" />
      <div className="w-full max-w-2xl text-center z-10">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
