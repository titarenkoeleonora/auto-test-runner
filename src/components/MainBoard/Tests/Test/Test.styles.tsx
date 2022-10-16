import { css } from 'styled-components';

import FailIcon from '../../../../images/fail.png';
import LoaderIcon from '../../../../images/loader.gif';
import SuccessIcon from '../../../../images/success.png';
import { styled } from '../../../../styles';
import { TestStatus } from '../../../../types';

interface StatusProps {
  status: TestStatus;
}

const getIcon = (status: string) => {
  switch (status) {
    case TestStatus.Running:
      return LoaderIcon;
    case TestStatus.Passed:
      return SuccessIcon;
    case TestStatus.Failed:
      return FailIcon;

    default:
      return '';
  }
};

export const TestWrapper = styled.li(
  ({ theme }) => css`
    padding: 15px 10px;
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 10px;
    align-items: center;
    background-color: ${theme.colors.backgroundPrimary};
    border-radius: 5px;
    list-style: none;

    &:hover {
      opacity: 0.8;
    }
  `,
);

export const Description = styled.p`
  padding: 0;
  margin: 0;
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Status = styled.p<StatusProps>(
  ({ status }) => css`
    padding: 0;
    margin: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
    min-width: 100px;

    ${status !== TestStatus.NotStarted &&
    `
      &::after {
        content: '';
        position: relative;
        display: flex;
        width: 20px;
        height: 20px;
        background-image: url(${getIcon(status)});
        background-size: 20px 20px;
        border-radius: 50%;
      }
    `}
  `,
);

export const Time = styled.span`
  opacity: 0.5;
`;
