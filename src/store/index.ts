import { create } from 'zustand';

type countProps = {
  count: number;
};

export const useStore = create((setState, getState, store) => ({
  count: 0,
  increasePopulation: () => setState((state: countProps) => ({ count: state.count + 1 })),
  removeAllBears: () => setState({ count: 0 }),
}));
