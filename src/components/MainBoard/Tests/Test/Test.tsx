import { FC, useEffect, useState } from 'react';

import { RenderedTestInterface, ResultInterface, TestStatus } from '../../../../types';
import { Description, Status, StatusWrapper, TestWrapper, Time } from './Test.styles';

export interface TestProps {
  test: RenderedTestInterface;
  isRunning: boolean;
  onTestResultUpdate(result: RenderedTestInterface): void;
}

const Test: FC<TestProps> = ({ test, isRunning, onTestResultUpdate }) => {
  const { description, run, id } = test;

  const [status, setStatus] = useState<TestStatus>(TestStatus.NotStarted);
  const [result, setResult] = useState<ResultInterface | null>(null);

  const time = result?.time || 0;
  const resultTime = `${(time / 1000).toFixed(2)}s`;

  useEffect(() => {
    if (!isRunning) return;

    setResult(null);
    setStatus(TestStatus.Running);

    run(setResult);
  }, [isRunning, run]);

  useEffect(() => {
    if (!result) return;

    setStatus(result.isPassed ? TestStatus.Passed : TestStatus.Failed);

    onTestResultUpdate({
      id,
      description,
      status,
      time,
      run,
    });
  }, [result, id, description, status, time, run, onTestResultUpdate]);

  return (
    <TestWrapper>
      <Description>{description}</Description>
      <StatusWrapper>
        {time > 0 && <Time>{resultTime}</Time>}
        <Status status={status}>{status}</Status>
      </StatusWrapper>
    </TestWrapper>
  );
};

export default Test;
