import { CONFIG } from 'src/global-config';
import { themeConfig } from 'src/theme/theme-config';

// ----------------------------------------------------------------------

export const SETTINGS_STORAGE_KEY = 'app-settings';

export const defaultSettings = {
  colorScheme: themeConfig.defaultMode,
  direction: themeConfig.direction,
  primaryColor: 'default',
  fontSize: 16,
  fontFamily: themeConfig.fontFamily.primary,
  version: CONFIG.appVersion,
};
