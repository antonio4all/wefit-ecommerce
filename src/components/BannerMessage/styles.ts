import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
  border-radius: ${theme.border.radius};
  width: 100%;
  min-height: 51.6rem;

  margin: 0 2.4rem;
  @media (min-width: ${theme.breakpoints.md}) {
    max-width: 720px;
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    max-width: 960px;
  }
  @media (min-width: ${theme.breakpoints.xxl}) {
    max-width: 1140px;
  }
`;
export const StyledTitle = styled.h1`
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.large};
  font-weight: ${theme.font.extraBold};
  line-height: 2.7rem;
  letter-spacing: 0em;
  max-width: 50%;
  text-align: center;
  margin-bottom: 2.4rem;
`;

export const StyledButton = styled.div`
  margin-top: 2.4rem;
  width: 17.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.extraBold};
  border-radius: ${theme.border.radius};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  line-height: 1.6rem;
  cursor: pointer;
`;
