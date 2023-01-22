import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import Text from '../Text';

export const ButtonContainer = styled(LinearGradient)`
  flex-direction: row;
  width: 200px;
  margin: 10px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;

  elevation: 15;
`;

export const TextButton = styled(Text)`
  color: #fff;
  font-weight: 700;
  padding: 18px 0px;
  font-size: 20px;
`;
TextButton.defaultProps = {
  color: 'background',
  typography: 'h5',
};

export const ViewIcon = styled.View`
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const ViewText = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;
