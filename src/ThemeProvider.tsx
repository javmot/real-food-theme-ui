import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default ({ children }: ThemeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
