import React, {
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ThemeContext } from 'styled-components';
import { InputProps, InputValueRef } from './types';

import {
  InputContainer,
  Border,
  InputInternal,
  Error,
  Label,
  IconContainer,
} from './styles';
import { TouchableOpacity } from 'react-native';
import Icon from '../Icon';

const Input: React.ForwardRefRenderFunction<InputValueRef, InputProps> = (
  {
    color = 'surface',
    secureTextEntry,
    icon,
    iconColor,
    label,
    error,
    iconPosition = 'right',
    onChangeText,
    ...rest
  },
  ref,
) => {
  const { colors } = useContext(ThemeContext);

  const [text, setText] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const internalRef = useRef<any>();

  useImperativeHandle(
    ref,
    () => ({
      value: text,
      focus: () => internalRef.current?.focus?.(),
      blur: () => internalRef.current?.blur?.(),
      setValue: (value: string) => setText(value),
    }),
    [text],
  );

  const selectedColorForActiveColorIcon = useMemo(() => {
    if (error) {
      return colors.error.main;
    }

    if (iconColor) {
      return colors[iconColor].main;
    }

    return colors[color].main;
  }, [error, color, colors, iconColor]);

  const renderIcon = useCallback(() => {
    if (secureTextEntry) {
      return (
        <TouchableOpacity
          onPress={() => setPasswordVisibility(prevState => !prevState)}>
          <IconContainer iconPosition={iconPosition}>
            <Icon
              icon={passwordVisibility ? 'eyeOpen' : 'eyeClose'}
              activeColor={selectedColorForActiveColorIcon}
            />
          </IconContainer>
        </TouchableOpacity>
      );
    }

    if (icon) {
      return (
        <IconContainer iconPosition={iconPosition}>
          <Icon icon={icon} activeColor={selectedColorForActiveColorIcon} />
        </IconContainer>
      );
    }
    return null;
  }, [
    iconPosition,
    secureTextEntry,
    passwordVisibility,
    selectedColorForActiveColorIcon,
    icon,
  ]);

  return (
    <InputContainer>
      {!!label && (
        <Label color="surface" typography="body3">
          {label}
        </Label>
      )}
      <Border
        color="transparent"
        borderColor={error ? colors.error.main : colors[color].main}>
        {iconPosition === 'left' && renderIcon()}
        <InputInternal
          ref={internalRef}
          value={text}
          onChangeText={(value: string) => {
            setText(value);
            onChangeText?.(value);
          }}
          secureTextEntry={secureTextEntry && !passwordVisibility}
          {...rest}
        />
        {iconPosition === 'right' && renderIcon()}
      </Border>
      {!!error && (
        <Error color="error" typography="body1">
          {error}
        </Error>
      )}
    </InputContainer>
  );
};

export default forwardRef(Input);
