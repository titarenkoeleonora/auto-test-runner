import { Dispatch, SetStateAction } from 'react';

export interface TestInterface {
  description: string;
  run(callback: Dispatch<SetStateAction<ResultInterface | null>>): void;
}

export interface ResultInterface {
  isPassed: boolean;
  time: number;
}

export enum TestStatus {
  NotStarted = 'Not Started',
  Running = 'Running',
  Passed = 'Passed',
  Failed = 'Failed',
}

export interface RenderedTestInterface {
  id: number;
  status: TestStatus;
  description: string;
  time: number | null;
  run(callback: Dispatch<SetStateAction<ResultInterface | null>>): void;
}
