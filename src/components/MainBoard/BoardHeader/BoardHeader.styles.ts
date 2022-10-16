import { styled } from '../../../styles';
import { ButtonWrapper } from '../../UI/Button/Button.styles';

export const HeaderWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;

  ${ButtonWrapper} {
    margin-left: auto;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 35px;
`;

export const Info = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
`;
