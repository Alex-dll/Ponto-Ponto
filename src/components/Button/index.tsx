import React, { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { ButtonProps } from './types';

import { ContainerButton, Title, Loading } from './styles';

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'error',
  mode = 'contained',
  loading = false,
  onPress,
  ...rest
}: ButtonProps) => {
  const { colors } = useContext(ThemeContext);

  const colorByMode = useMemo(() => {
    return mode === 'outline' ? colors[color].main : colors[color].onMain;
  }, [colors, color, mode]);

  return (
    <ContainerButton
      color={colors[color].main}
      borderColor={colors[color].main}
      mode={mode}
      onPress={onPress}
      {...rest}>
      <Title color={colorByMode}>{children}</Title>
      {loading && <Loading size={15} color={colorByMode} />}
    </ContainerButton>
  );
};

export default Button;
