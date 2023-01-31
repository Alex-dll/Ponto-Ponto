import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Icon from '../Icon';
import { ButtonContainer, TextButton, ViewIcon, ViewText } from './styles';

interface IButtonProps extends TouchableOpacityProps {
  children: string;
}

export default function ButtonRegisterTime({
  children,
  ...rest
}: IButtonProps) {
  return (
    <TouchableOpacity {...rest}>
      <ButtonContainer colors={['#44ACC3', '#3594A9']}>
        <ViewText>
          <TextButton>{children}</TextButton>
        </ViewText>
        <ViewIcon>
          <Icon icon="clock" />
        </ViewIcon>
      </ButtonContainer>
    </TouchableOpacity>
  );
}
