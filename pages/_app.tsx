import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { UIProvider } from "../context/UI/UIProvider";
import { darkTheme } from "./../theme/dark-theme";
import { lightTheme } from "./../theme/light-theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}

export default MyApp;
