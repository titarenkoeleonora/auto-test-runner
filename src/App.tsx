import { ThemeProvider } from 'styled-components';

import MainBoard from './components/MainBoard/MainBoard';
import Header from './components/UI/Header/Header';
import Main from './components/UI/Main/Main';
import { GlobalStyles, theme } from './styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <Main>
      <MainBoard />
    </Main>
  </ThemeProvider>
);

export default App;
