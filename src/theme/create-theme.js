'use client';

import { createTheme as createMuiTheme } from '@mui/material/styles';

import { components } from './core/components';
import { customShadows } from './core/custom-shadows';
import { mixins } from './core/mixins';
import { palette } from './core/palette';
import { shadows } from './core/shadows';
import { typography } from './core/typography';
import { themeConfig } from './theme-config';
// import { updateComponentsWithSettings, updateCoreWithSettings } from './with-settings';

// ----------------------------------------------------------------------

// export const baseTheme = {
//   colorSchemes: {
//     light: {
//       palette: palette.light,
//       shadows: shadows.light,
//       customShadows: customShadows.light,
//     },
//     dark: {
//       palette: palette.dark,
//       shadows: shadows.dark,
//       customShadows: customShadows.dark,
//     },
//   },
//   mixins,
//   components,
//   typography,
//   shape: { borderRadius: 8 },
//   direction: themeConfig.direction,
//   cssVariables: themeConfig.cssVariables,
//   defaultColorScheme: themeConfig.defaultMode,
// };

// export function createTheme({ settingsState, themeOverrides = {} } = {}) {
//   // Update core theme settings
//   const updatedCore = settingsState ? updateCoreWithSettings(baseTheme, settingsState) : baseTheme;

//   // Update component settings
//   const updatedComponents = settingsState ? updateComponentsWithSettings(settingsState) : {};

//   // Create and return the final theme
//   const theme = createMuiTheme(updatedCore, updatedComponents, themeOverrides);

//   return theme;
// }

export const baseTheme = {
  colorSchemes: {
    light: {
      palette: palette.light,
      shadows: shadows.light,
      customShadows: customShadows.light,
    },
    dark: {
      palette: palette.dark,
      shadows: shadows.dark,
      customShadows: customShadows.dark,
    },
  },
  mixins,
  components,
  typography,
  shape: { borderRadius: 8 },
  direction: themeConfig.direction,
  cssVariables: themeConfig.cssVariables,
  defaultColorScheme: themeConfig.defaultMode,
};

export function createTheme({ themeOverrides }) {
  const theme = createMuiTheme(baseTheme, themeOverrides);

  return theme;
}
