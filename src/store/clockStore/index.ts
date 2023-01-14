import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type Props = {
  timer: Date;
  setTimer: (newTimer: Date) => void;
};

export const useClockStore = create<Props>()(
  devtools((set, get) => ({
    timer: new Date(),
    setTimer: (newTimer: Date) => set(() => ({ timer: newTimer })),
  })),
);
