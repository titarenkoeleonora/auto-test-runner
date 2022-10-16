import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../../styles';
import { TestStatus } from '../../../../types';
import Test, { TestProps } from './Test';

describe('Test', () => {
  const initialProps: TestProps = {
    test: {
      id: 1,
      description: 'Test1',
      status: TestStatus.NotStarted,
      time: null,
      run: jest.fn(),
    },
    isRunning: false,
    onTestResultUpdate: jest.fn(),
  };

  it('should show Not Started status initially', () => {
    render(
      <ThemeProvider theme={theme}>
        <Test {...initialProps} />
      </ThemeProvider>,
    );

    const statusText = screen.getByText('not started', { exact: false });

    expect(statusText).toBeInTheDocument();
  });

  it('should show Running status when tests run', () => {
    render(
      <ThemeProvider theme={theme}>
        <Test {...initialProps} isRunning={true} />
      </ThemeProvider>,
    );

    const statusText = screen.getByText('running', { exact: false });

    expect(statusText).toBeInTheDocument();
  });
});
