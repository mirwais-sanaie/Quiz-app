import { create } from "zustand";

type Question = {
  id: string;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

type Store = {
  questions: Question[];
  currentQuestionIndex: number;
  selectedOption: number | null;
  isCorrect: boolean | null;
  status: string;
  points: number;
  highestScore: number;
  timeLeft: number;

  setQuestions: (data: Question[]) => void;
  startQuiz: () => void;
  selectOption: (choosingOption: number) => void;
  nextQuestion: () => void;
  setTimer: (time: number) => void;
  resetQuiz: () => void;
};

const useQuizStore = create<Store>((set, get) => ({
  questions: [],
  currentQuestionIndex: 0,
  selectedOption: null,
  isCorrect: null,
  status: "pending",
  points: 0,
  highestScore: 0,
  timeLeft: 0,

  setQuestions: (data: Question[]) =>
    set({
      questions: data,
      currentQuestionIndex: 0,
      selectedOption: null,
      isCorrect: null,
      timeLeft: 0,
      status: "ready",
    }),

  selectOption: (choosingOption: number) => {
    const { questions, currentQuestionIndex } = get();
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect =
      questions[currentQuestionIndex].correctOption === choosingOption;
    let lastPoints = get().points;
    if (isCorrect) {
      lastPoints += currentQuestion.points;
    }
    set({
      selectedOption: choosingOption,
      isCorrect,
      points: lastPoints,
    });
  },

  startQuiz: () => {
    const { questions } = get();
    if (questions.length > 0) {
      set({
        status: "playing",
      });
    }
  },
  nextQuestion: () => {
    const { currentQuestionIndex, questions } = get();
    if (currentQuestionIndex < questions.length - 1) {
      set({
        currentQuestionIndex: currentQuestionIndex + 1,
        selectedOption: null,
        isCorrect: null,
      });
    } else {
      set({
        status: "finished",
        highestScore:
          get().points > get().highestScore ? get().points : get().highestScore,
      });
    }
  },

  setTimer: (time: number) => {
    set({
      timeLeft: time,
    });
  },

  resetQuiz: () =>
    set({
      currentQuestionIndex: 0,
      selectedOption: null,
      isCorrect: null,
      status: "ready",
      points: 0,
    }),
}));

export default useQuizStore;
