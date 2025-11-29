import type { DefaultTheme } from "styled-components";
import type { ThemeConfig } from "antd";

export const getAntDesignConfig = (theme: DefaultTheme): ThemeConfig => ({
  token: {
    fontFamily: "Geologica",
    fontSize: 14,
  },
  components: {
    Input: {
      activeBorderColor: theme.colors.active.main,
      hoverBorderColor: theme.colors.active.main,
      colorBorder: "transparent",
      colorText: theme.colors.text.main,
      colorBgContainer: theme.colors.background.primary,
      controlHeightLG: 66,
      borderRadiusLG: 16,
      inputFontSize: 25,
    },
    Button: {
      colorBgContainer: theme.colors.background.primary,
      defaultBorderColor: "transparent",
      defaultHoverBorderColor: theme.colors.active.main,
      defaultActiveBorderColor: theme.colors.active.main,
      controlHeightLG: 66,
      borderRadiusLG: 16,
      colorText: theme.colors.text.main,
      defaultHoverColor: theme.colors.text.main,
      defaultActiveColor: theme.colors.text.main,
    },
    Dropdown: {
      borderRadiusLG: 16,
    },
    Segmented: {
      itemColor: theme.colors.text.main,
      itemHoverColor: theme.colors.text.secondary,
      itemSelectedBg: theme.colors.active.main,
      itemSelectedColor: theme.colors.background.primary,
      trackBg: theme.colors.background.secondary,
      colorBorder: "red",
      borderRadius: 21,
    },
  },
});
