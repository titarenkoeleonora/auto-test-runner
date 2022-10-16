import { css } from 'styled-components';

import { styled } from '../../../styles';

export const HeaderWrapper = styled.header(
  ({ theme }) => css`
    padding: 23px 0;
    background-color: ${theme.colors.backgroundSecondary};
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  `,
);

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Title = styled.h1(
  ({ theme }) => css`
    padding: 0;
    margin: 0;
    font-size: 23px;
    color: ${theme.colors.textSecondary};
  `,
);

export const Image = styled.img`
  width: 25px;
  height: 25px;
`;
