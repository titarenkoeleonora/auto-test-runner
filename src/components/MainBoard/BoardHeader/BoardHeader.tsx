import { FC, MouseEvent, useEffect, useState } from 'react';

import Button from '../../UI/Button/Button';
import { HeaderWrapper, Info, InfoWrapper } from './BoardHeader.styles';

export interface BoardHeaderProps {
  isRunning: boolean;
  passedTestsAmount: number;
  failedTestsAmount: number;
  finishedTestsAmount: number;
  runningTestsAmount: number;
  testsAmount: number;
  onRunTestsClick(): void;
  onTestsFinished(): void;
}

const BoardHeader: FC<BoardHeaderProps> = ({
  isRunning,
  passedTestsAmount,
  failedTestsAmount,
  finishedTestsAmount,
  runningTestsAmount,
  testsAmount,
  onRunTestsClick,
  onTestsFinished,
}) => {
  const [areTestsFinished, setAreTestsFinished] = useState<boolean>(false);

  const onButtonClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    setAreTestsFinished(false);
    onRunTestsClick();
  };

  useEffect(() => {
    if (finishedTestsAmount !== testsAmount) return;

    setAreTestsFinished(true);
    onTestsFinished();
  }, [finishedTestsAmount, testsAmount, onTestsFinished]);

  const areTestsStarted = isRunning || areTestsFinished;
  const runButtonText = areTestsFinished ? 'Try again' : 'Run tests';
  const testsStatusText = areTestsFinished
    ? 'Done!'
    : `Running: ${runningTestsAmount}/${testsAmount}`;

  return (
    <HeaderWrapper>
      {areTestsStarted && (
        <InfoWrapper>
          <Info>{testsStatusText}</Info>
          <Info>
            Passed: {passedTestsAmount}/{testsAmount}
          </Info>
          <Info>
            Failed: {failedTestsAmount}/{testsAmount}
          </Info>
        </InfoWrapper>
      )}
      <Button disabled={isRunning} onClick={onButtonClick}>
        {runButtonText}
      </Button>
    </HeaderWrapper>
  );
};

export default BoardHeader;
