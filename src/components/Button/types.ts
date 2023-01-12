import { TouchableOpacityProps } from 'react-native';
import { ColorsType } from 'styled-components';

export type Mode = 'outline' | 'contained';

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  color?: ColorsType;
  mode?: Mode;
  loading?: boolean;
}
