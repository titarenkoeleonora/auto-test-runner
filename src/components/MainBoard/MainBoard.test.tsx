import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../styles';
import MainBoard from './MainBoard';

describe('MainBoard', () => {
  it('should disable button when tests run', () => {
    render(
      <ThemeProvider theme={theme}>
        <MainBoard />
      </ThemeProvider>,
    );

    const startButton = screen.getByRole('button', { name: 'Run tests' });

    expect(startButton).toBeEnabled();

    fireEvent.click(startButton);

    expect(startButton).toBeDisabled();
  });
});
