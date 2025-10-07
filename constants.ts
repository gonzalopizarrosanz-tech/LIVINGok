
import type { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    question: "¿Qué consola portátil revolucionó el mundo de los videojuegos en 1989?",
    options: ["Sega Game Gear", "Atari Lynx", "Nintendo Game Boy"],
    correctAnswerIndex: 2,
  },
  {
    question: "¿Qué serie de TV tenía un protagonista que se mudaba de Filadelfia a Bel-Air?",
    options: ["Salvados por la campana", "El Príncipe de Bel-Air", "Cosas de casa"],
    correctAnswerIndex: 1,
  },
  {
    question: "El 'Girl Power' fue el lema de este famoso grupo de pop británico:",
    options: ["All Saints", "B*Witched", "Spice Girls"],
    correctAnswerIndex: 2,
  },
  {
    question: "¿Cómo se llamaba el dispositivo de Sony para escuchar música en casetes en cualquier lugar?",
    options: ["Discman", "Walkman", "iPod"],
    correctAnswerIndex: 1,
  },
  {
    question: "¿En qué juego tenías que encajar bloques que caían para completar líneas?",
    options: ["Dr. Mario", "Tetris", "Columns"],
    correctAnswerIndex: 1,
  },
];

export const WIN_MESSAGE = "¡Estás listo para la fiesta LIVING 90's! Eres un auténtico noventero.";
export const LOSE_MESSAGE = "Aún no estás preparado… necesitas repasar los 90.";
