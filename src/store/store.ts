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
  timeLeft: number;
  setQuestions: (data: Question[]) => void;
  selectOption: (choosingOption: number) => void;
  startQuiz: () => void;
  nextQuestion: () => void;
  checkAnswer: () => void;
  status: string;
  points: number;

  // startTimer : (sec: number) => void;
  // resetQuiz: () => void;
};
const useQuizStore = create<Store>((set, get) => ({
  questions: [],
  currentQuestionIndex: 0,
  selectedOption: null,
  isCorrect: null,
  timeLeft: 0,
  status: "pending", // ready, playing, finished
  points: 0,
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
    const isCorrect =
      questions[currentQuestionIndex].correctOption === choosingOption;
    set({ selectedOption: choosingOption, isCorrect });
  },
  startQuiz: () => {
    const { questions } = get();
    if (questions.length > 0) {
      set({
        currentQuestionIndex: 0,
        selectedOption: null,
        isCorrect: null,
        timeLeft: 30, // Set initial time left for the quiz
        status: "playing",
      });
    }
  },
  checkAnswer: () => {
    const { questions, currentQuestionIndex, selectedOption, isCorrect } =
      get();
    if (selectedOption !== null) {
      const currentQuestion = questions[currentQuestionIndex];
      if (isCorrect) {
        set({
          points: get().points + currentQuestion.points,
        });
      }
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
    }
  },
}));

export default useQuizStore;
