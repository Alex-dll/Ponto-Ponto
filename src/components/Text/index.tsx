import React from 'react';
import { IText } from './types';

import { TextContainer } from './styles';

const Text: React.FC<IText> = ({
  children,
  typography = 'body1',
  color = 'surface',
  ...rest
}: IText) => {
  return (
    <TextContainer color={color} typography={typography} {...rest}>
      {children}
    </TextContainer>
  );
};

export default Text;
