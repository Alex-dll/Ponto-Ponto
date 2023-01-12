import styled from "styled-components/native";
import { IText } from "./types";

type TextContainerProps = Required<Pick<IText, "color" | "typography">>;

export const TextContainer = styled.Text<TextContainerProps>`
  color: ${({ theme, color }) => {
    return theme.colors[color].main;
  }};
  font-size: ${({ theme, typography }) => {
    return `${theme.typography[typography].fontSize}px`;
  }};
  font-family: ${({ theme, typography }) => {
    return theme.typography[typography].fontFamily;
  }};
`;
