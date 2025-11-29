import type { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { styleComponentsConfig } from "@shared/config";

export const WithStyledComponents: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={styleComponentsConfig}>{children}</ThemeProvider>
  );
};
