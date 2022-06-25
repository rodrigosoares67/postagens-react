import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Lista from './components/Lista';

const theme = createTheme();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
          <Lista />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
