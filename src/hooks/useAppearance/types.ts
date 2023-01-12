import { ColorSchemeName } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

export type themeType = 'light' | 'dark';

export interface AppearanceProps {
  currentTheme: themeType;
  theme: DefaultTheme;
}

export interface colorSchemeProps {
  colorScheme: ColorSchemeName;
}
