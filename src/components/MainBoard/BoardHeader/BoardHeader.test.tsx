import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../styles';
import BoardHeader, { BoardHeaderProps } from './BoardHeader';

describe('BoardHeader', () => {
  const initialProps: BoardHeaderProps = {
    isRunning: false,
    passedTestsAmount: 0,
    failedTestsAmount: 0,
    finishedTestsAmount: 0,
    runningTestsAmount: 0,
    testsAmount: 6,
    onRunTestsClick: jest.fn(),
    onTestsFinished: jest.fn(),
  };

  it('should render start button initially', () => {
    render(
      <ThemeProvider theme={theme}>
        <BoardHeader {...initialProps} />
      </ThemeProvider>,
    );

    const startButton = screen.getByRole('button', { name: 'Run tests' });

    expect(startButton).toBeEnabled();
    expect(startButton).toBeInTheDocument();
  });

  it('should disable button when tests run', () => {
    render(
      <ThemeProvider theme={theme}>
        <BoardHeader {...initialProps} isRunning={true} />
      </ThemeProvider>,
    );

    const startButton = screen.getByRole('button', { name: 'Run tests' });

    expect(startButton).toBeDisabled();
  });

  it('should enable button when all tests finished', () => {
    render(
      <ThemeProvider theme={theme}>
        <BoardHeader {...initialProps} finishedTestsAmount={1} testsAmount={1} />
      </ThemeProvider>,
    );

    const startButton = screen.getByRole('button', { name: 'Try again' });

    expect(startButton).toBeEnabled();
  });

  it('should change text when all tests finished', () => {
    render(
      <ThemeProvider theme={theme}>
        <BoardHeader {...initialProps} finishedTestsAmount={1} testsAmount={1} />
      </ThemeProvider>,
    );

    const startButton = screen.getByRole('button', { name: 'Try again' });

    expect(startButton).toBeInTheDocument();
  });

  it('should show right amount of tests', () => {
    render(
      <ThemeProvider theme={theme}>
        <BoardHeader
          {...initialProps}
          isRunning={true}
          passedTestsAmount={2}
          failedTestsAmount={3}
          runningTestsAmount={1}
        />
      </ThemeProvider>,
    );

    const passedText = screen.getByText('passed', { exact: false });
    const failedText = screen.getByText('failed', { exact: false });
    const runningText = screen.getByText('running', { exact: false });

    expect(passedText).toHaveTextContent('2/6');
    expect(failedText).toHaveTextContent('3/6');
    expect(runningText).toHaveTextContent('1/6');
  });

  it('should show Done when all tests finished', () => {
    render(
      <ThemeProvider theme={theme}>
        <BoardHeader {...initialProps} finishedTestsAmount={1} testsAmount={1} />
      </ThemeProvider>,
    );

    const doneText = screen.getByText('done', { exact: false });

    expect(doneText).toBeInTheDocument();
  });
});
