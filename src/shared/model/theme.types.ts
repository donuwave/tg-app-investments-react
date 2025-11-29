declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        secondary: string;
      };
      text: {
        main: string;
        secondary: string;
      };
      active: {
        main: string;
        secondary: string;
      };
      danger: string;
      border: string;
    };
  }
}
