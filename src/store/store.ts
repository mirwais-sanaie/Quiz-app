import { create } from "zustand";

type Question = {
  id: string;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

type Store = {
  count: number;
  increment: () => void;
  questions: Question[];
  setQuestion: (data: Question[]) => void;
};

const useStore = create<Store>((set) => ({
  count: 0,
  questions: [],
  increment: () => set((state) => ({ count: state.count + 1 })),
  setQuestion: (data) => set(() => ({ questions: [...data] })),
}));

export default useStore;
