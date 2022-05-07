import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme } from "./../theme/dark-theme";
import { lightTheme } from "./../theme/light-theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
