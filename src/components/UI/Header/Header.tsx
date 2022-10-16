import logoImage from '../../../images/logo.png';
import Container from '../Container/Container';
import { HeaderWrapper, Image, LogoWrapper, Title } from './Header.styles';

const Header = () => (
  <HeaderWrapper>
    <Container>
      <LogoWrapper>
        <Image src={logoImage} alt="logo" />
        <Title>Auto test runner</Title>
      </LogoWrapper>
    </Container>
  </HeaderWrapper>
);

export default Header;
