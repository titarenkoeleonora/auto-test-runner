import { FC, PropsWithChildren } from 'react';

import { ContainerWrapper } from './Container.styles';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

const Container: FC<ContainerProps> = ({ className, children }) => (
  <ContainerWrapper className={className}>{children}</ContainerWrapper>
);

export default Container;
