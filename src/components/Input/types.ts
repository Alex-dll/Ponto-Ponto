import { TextInputProps } from 'react-native';
import { ColorsType } from 'styled-components';
import { NameIconsTypes } from '../../constants/icons';

export type IconPosition = 'left' | 'right';

export interface InputProps extends TextInputProps {
  color?: ColorsType;
  icon?: NameIconsTypes;
  iconColor?: ColorsType;
  iconPosition?: IconPosition;
  label?: string;
  error?: string;
}

export interface InputValueRef {
  value: string;
  focus?: () => void;
  blur: () => void;
  setValue?: (value: string) => void;
}
