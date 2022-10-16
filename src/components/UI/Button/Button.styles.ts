import { css } from 'styled-components';

import { styled } from '../../../styles';

export const ButtonWrapper = styled.button(
  ({ theme }) => css`
    min-height: 40px;
    padding: 0 16px;
    font-size: 16px;
    color: ${theme.colors.textSecondary};
    background-color: ${theme.colors.buttonDefault};
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      opacity: 0.7;
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  `,
);
