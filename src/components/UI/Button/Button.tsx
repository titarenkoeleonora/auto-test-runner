import { FC, HTMLAttributes } from 'react';

import { ButtonWrapper } from './Button.styles';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, disabled, onClick }) => (
  <ButtonWrapper disabled={disabled} onClick={onClick}>
    {children}
  </ButtonWrapper>
);

export default Button;
