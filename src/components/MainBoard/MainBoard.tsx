import { useCallback, useEffect, useState } from 'react';

import { tests } from '../../data/tests';
import { RenderedTestInterface, TestStatus } from '../../types';
import { testAdapter } from '../../utils/testAdapter';
import BoardHeader from './BoardHeader/BoardHeader';
import Tests from './Tests/Tests';

const MainBoard = () => {
  const [renderedTests, setRenderedTests] = useState<RenderedTestInterface[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [passedTestsAmount, setPassedTestsAmount] = useState<number>(0);
  const [failedTestsAmount, setFailedTestsAmount] = useState<number>(0);

  const testsAmount = tests?.length || 0;

  const finishedTestsAmount = passedTestsAmount + failedTestsAmount;
  const runningTestsAmount = testsAmount - finishedTestsAmount;

  useEffect(() => {
    setRenderedTests(testAdapter(tests));
  }, []);

  const onTestsFinished = useCallback(() => {
    setIsRunning(false);
  }, []);

  const onRunTestsClick = () => {
    setPassedTestsAmount(0);
    setFailedTestsAmount(0);
    setIsRunning(true);
  };

  const updateRenderedTests = (
    prevRenderedTests: RenderedTestInterface[],
    newResult: RenderedTestInterface,
  ) => {
    const changedTestIndex = prevRenderedTests.findIndex((test) => test.id === newResult.id);
    prevRenderedTests.splice(changedTestIndex, 1, newResult);

    return prevRenderedTests;
  };

  const onTestResultUpdate = useCallback((newResult: RenderedTestInterface) => {
    setRenderedTests((prevRenderedTests) => updateRenderedTests(prevRenderedTests, newResult));

    if (newResult.status === TestStatus.Passed) {
      setPassedTestsAmount((prevTestsAmount) => prevTestsAmount + 1);
    } else if (newResult.status === TestStatus.Failed) {
      setFailedTestsAmount((prevTestsAmount) => prevTestsAmount + 1);
    }
  }, []);

  if (testsAmount === 0) return <p>Sorry. We don&apos;t have any tests to run :(</p>;

  return (
    <>
      <BoardHeader
        onRunTestsClick={onRunTestsClick}
        onTestsFinished={onTestsFinished}
        isRunning={isRunning}
        passedTestsAmount={passedTestsAmount}
        failedTestsAmount={failedTestsAmount}
        finishedTestsAmount={finishedTestsAmount}
        runningTestsAmount={runningTestsAmount}
        testsAmount={testsAmount}
      />
      <Tests tests={renderedTests} isRunning={isRunning} onTestResultUpdate={onTestResultUpdate} />
    </>
  );
};

export default MainBoard;
