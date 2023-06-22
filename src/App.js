import './App.css';
import { AppRoutes } from './pages/routes'
import { ThemeProvider } from './context/themeContext';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
}

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style-type: none;
    color: inherit;

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5)
    }

    @font-face {
      font-family: 'Open Sans';
      src: url('/Quest-React-Avancado/font/pokemon-dp-pro.ttf') format('truetype');
    }
    font-family: 'Open Sans', Arial, sans-serif;
  }
`

export default App;
