// App.tsx
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import agent from "../api/agent";
import { useStoreContext } from "../context/StoreContext";
import { getCookie } from "../util/util";
import Footer from "./Footer";
import Header from "./Header";
import getDesignTokens from "./theme"; // Импортирайте темата

function App() {
  const { setBasket } = useStoreContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie("buyerId");
    if (buyerId) {
      agent.Basket.get()
        .then((basket) => setBasket(basket))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [setBasket]);

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";

  const theme = useMemo(
    () => createTheme(getDesignTokens(paletteType)),
    [paletteType]
  );

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  // if (loading) return <LoadingComponent message="Initializing app..." />;

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container
        sx={{
          maxWidth: "1920px !important",
          minHeight: "100vh",
          padding: "0 !important",
          mt: 4,
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
