import { Dispatch } from 'redux';

export const customSetCounterAction = (value: number, gap: number) => {
  return { payload: value - gap };
};
