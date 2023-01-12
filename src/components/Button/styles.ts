import styled from 'styled-components/native';
import { Mode } from './types';

interface IContainerButton {
  readonly color: string;
  readonly borderColor: string;
  readonly mode: Mode;
}

export const ContainerButton = styled.TouchableOpacity<IContainerButton>`
  padding: 12px 0;
  background-color: ${({ color, mode }) => {
    if (mode === 'outline') {
      return 'transparent';
    }
    return color;
  }};
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borders.radius.sm}px;
  flex-direction: row;
  border-color: ${({ borderColor }) => borderColor || 'transparent'};
  border-width: 1px;
`;

interface ITitle {
  readonly color: string;
}

export const Title = styled.Text<ITitle>`
  color: ${({ color }) => color};
  font-family: ${({ theme }) => theme.typography.body2.fontFamily};
  font-size: ${({ theme }) => theme.typography.body2.fontSize}px;
  align-self: center;
`;

export const Loading = styled.ActivityIndicator`
  margin-left: ${({ theme }) => theme.spacing.sm}px;
`;
