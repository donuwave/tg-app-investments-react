import type { FC, PropsWithChildren } from "react";

import { useTheme } from "styled-components";
import { getAntDesignConfig } from "@shared/config";
import { ConfigProvider } from "antd";

export const WithTheme: FC<PropsWithChildren> = ({ children }) => {
  const styledComponents = useTheme();
  const antDesign = getAntDesignConfig(styledComponents);

  return <ConfigProvider theme={antDesign}>{children}</ConfigProvider>;
};
