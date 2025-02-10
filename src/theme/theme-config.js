export const themeConfig = {
  /** **************************************
   * Base
   *************************************** */
  direction: 'ltr',
  defaultMode: 'light',
  modeStorageKey: 'theme-mode',
  classesPrefix: 'minimal',
  /** **************************************
   * Typography
   *************************************** */
  fontFamily: {
    primary: 'Archivo Narrow Variable',
    secondary: 'Archivo Black',
  },
  /** **************************************
   * Palette
   *************************************** */
  // palette: {
  //   primary: {
  //     lighter: '#FEE9D1',
  //     light: '#FDAB76',
  //     main: '#FA541C',
  //     dark: '#B3200E',
  //     darker: '#770508',
  //     contrastText: '#FFFFFF',
  //   },
  //   secondary: {
  //     lighter: '#EFD6FF',
  //     light: '#C684FF',
  //     main: '#8E33FF',
  //     dark: '#5119B7',
  //     darker: '#27097A',
  //     contrastText: '#FFFFFF',
  //   },
  //   info: {
  //     lighter: '#CAFDF5',
  //     light: '#61F3F3',
  //     main: '#00B8D9',
  //     dark: '#006C9C',
  //     darker: '#003768',
  //     contrastText: '#FFFFFF',
  //   },
  //   success: {
  //     lighter: '#D3FCD2',
  //     light: '#77ED8B',
  //     main: '#22C55E',
  //     dark: '#118D57',
  //     darker: '#065E49',
  //     contrastText: '#ffffff',
  //   },
  //   warning: {
  //     lighter: '#FFF5CC',
  //     light: '#FFD666',
  //     main: '#FFAB00',
  //     dark: '#B76E00',
  //     darker: '#7A4100',
  //     contrastText: '#1C252E',
  //   },
  //   error: {
  //     lighter: '#FFE9D5',
  //     light: '#FFAC82',
  //     main: '#FF5630',
  //     dark: '#B71D18',
  //     darker: '#7A0916',
  //     contrastText: '#FFFFFF',
  //   },
  //   grey: {
  //     50: '#FCFDFD',
  //     100: '#F9FAFB',
  //     200: '#F4F6F8',
  //     300: '#DFE3E8',
  //     400: '#C4CDD5',
  //     500: '#919EAB',
  //     600: '#637381',
  //     700: '#454F5B',
  //     800: '#1C252E',
  //     900: '#141A21',
  //   },
  //   common: { black: '#000000', white: '#FFFFFF' },
  // },
  palette: {
    primary: {
      lighter: '#DFFEEB',
      light: '#9EF9D3',
      main: '#5DEDCD',
      dark: '#2EAAA6',
      darker: '#116271',
      contrastText: '#FFFFFF',
    },
    secondary: {
      lighter: '#CDE4F4',
      light: '#6392C0',
      main: '#09192F',
      dark: '#040E21',
      darker: '#010616',
      contrastText: '#FFFFFF',
    },
    info: {
      lighter: '#DCE0FF',
      light: '#96A1FF',
      main: '#5160FF',
      dark: '#2832B7',
      darker: '#0F147A',
      contrastText: '#FFFFFF',
    },
    success: {
      lighter: '#F2FCCE',
      light: '#C7ED6C',
      main: '#83C413',
      dark: '#528D09',
      darker: '#2F5E03',
      contrastText: '#ffffff',
    },
    warning: {
      lighter: '#FFFBD0',
      light: '#FFF073',
      main: '#FFE016',
      dark: '#B79B0B',
      darker: '#7A6404',
      contrastText: '#1C252E',
    },
    error: {
      lighter: '#FFE7D8',
      light: '#FFA58B',
      main: '#FF493F',
      dark: '#B71F31',
      darker: '#7A0C2B',
      contrastText: '#FFFFFF',
    },
    grey: {
      50: '#FCFDFD',
      100: '#F9FAFB',
      200: '#F4F6F8',
      300: '#DFE3E8',
      400: '#C4CDD5',
      500: '#919EAB',
      600: '#637381',
      700: '#454F5B',
      800: '#1C252E',
      900: '#141A21',
    },
    common: { black: '#000000', white: '#FFFFFF' },
  },
  /** **************************************
   * Css variables
   *************************************** */
  cssVariables: {
    cssVarPrefix: '',
    colorSchemeSelector: 'data-color-scheme',
  },
};
