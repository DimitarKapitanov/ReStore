// App.tsx
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./footer/Footer";
import Header from "./Header";
import getDesignTokens from './theme'; // Импортирайте темата

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = useMemo(() => createTheme(getDesignTokens(paletteType)), [paletteType]);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container sx={{ maxWidth: '1920px !important', padding: '0 !important', mt: 4 }} >
        <Outlet />
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App;