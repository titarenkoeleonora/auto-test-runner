import { FC, PropsWithChildren } from 'react';

import Container from '../Container/Container';
import { MainWrapper } from './Main.styles';

const Main: FC<PropsWithChildren> = ({ children }) => (
  <MainWrapper>
    <Container>{children}</Container>
  </MainWrapper>
);

export default Main;
