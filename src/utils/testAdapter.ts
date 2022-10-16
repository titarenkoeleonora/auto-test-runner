import { TestInterface, TestStatus } from '../types';

export const testAdapter = (initialTests: TestInterface[]) => {
  return initialTests.map((test, index) => ({
    id: index + 1,
    description: test.description,
    status: TestStatus.NotStarted,
    time: null,
    run: test.run,
  }));
};
