import { FC } from 'react';

import { RenderedTestInterface } from '../../../types';
import Test from './Test/Test';
import { TestsWrapper } from './Tests.styles';

interface TestsProps {
  tests: RenderedTestInterface[];
  isRunning: boolean;
  onTestResultUpdate(result: RenderedTestInterface): void;
}

const Tests: FC<TestsProps> = ({ tests, isRunning, onTestResultUpdate }) => (
  <TestsWrapper>
    {tests.map((test) => (
      <Test
        key={test.id}
        test={test}
        isRunning={isRunning}
        onTestResultUpdate={onTestResultUpdate}
      />
    ))}
  </TestsWrapper>
);

export default Tests;
