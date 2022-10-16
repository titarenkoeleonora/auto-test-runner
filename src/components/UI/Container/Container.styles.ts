import { css } from 'styled-components';

import { styled } from '../../../styles';

export const ContainerWrapper = styled.div(
  ({ theme }) => css`
    margin: 0 auto;
    padding: 0 20px;

    @media (min-width: ${theme.breakpoints.tablet}) {
      padding: 0 30px;
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      padding: 0 40px;
      width: ${theme.breakpoints.desktop};
    }
  `,
);
