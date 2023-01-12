import { TextProps } from 'react-native';
import { ColorsType, TypographyType } from 'styled-components';

export interface IText extends TextProps {
  children: string;
  color?: ColorsType;
  typography?: TypographyType;
}
