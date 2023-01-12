import React from 'react';
import { ISeparator } from './types';

import { ContainerSeparator } from './styles';

const Separator: React.FC<ISeparator> = ({ height, width }: ISeparator) => {
  return <ContainerSeparator height={height} width={width} />;
};

export default Separator;
