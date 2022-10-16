import { Dispatch, SetStateAction } from 'react';

import { ResultInterface } from '../types';

export const makeDummyTest = () => {
  const delay = 7000 + Math.random() * 7000;
  const testPassed = Math.random() > 0.5;

  return (callback: Dispatch<SetStateAction<ResultInterface | null>>): void => {
    window.setTimeout(() => callback({ isPassed: testPassed, time: delay }), delay);
  };
};
