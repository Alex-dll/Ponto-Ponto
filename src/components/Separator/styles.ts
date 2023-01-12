import styled from 'styled-components/native';
import { ISeparator } from './types';

export const ContainerSeparator = styled.View<ISeparator>`
  ${({ height }) => !!height && `height: ${height}px;`}
  ${({ height }) => !!height && `min-height: ${height}px;`}
  ${({ height }) => !!height && `max-height: ${height}px;`}


  ${({ width }) => !!width && `width: ${width}px;`}
  ${({ width }) => !!width && `min-width: ${width}px;`}
  ${({ width }) => !!width && `max-width: ${width}px;`}
`;
