export interface AppVariant {
  first: string;
  second: string;
  third: string;
}

export interface AppTheme {
  background: string;
  gray: string;
  lightGray: string;
  primary: AppVariant;
  secondary: AppVariant;
  ternary: AppVariant;
}

export interface ColorThemes {
  light: {background: string};
  dark: {background: string};
}
export interface TextTheme {
  light: {
    primary: string;
    secondary: string;
    danger: string;
    warning: string;
    info: string;
    gray: string;
  };
  dark: {
    primary: string;
    secondary: string;
    danger: string;
    warning: string;
    info: string;
    gray: string;
  };
}
const BACKGROUND_THEME: ColorThemes = {
  light: {background: '#fff'},
  dark: {background: '#0B1710'},
};

const APP_THEME = {
  headerBackground: '#EA9953',
  Background: '#FFFFFF',
};
const TEXT_THEME: TextTheme = {
  light: {
    primary: '#0B1710',
    secondary: '#ccc',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    gray: '#0B1710',
  },
  dark: {
    primary: '#fff',
    secondary: '#ccc',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    gray: '#fff',
  },
};

export {APP_THEME, BACKGROUND_THEME, TEXT_THEME};
