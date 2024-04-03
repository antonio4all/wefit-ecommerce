import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentLoader = styled(Content)`
  margin-top: 4rem;
`;

export const CardConteiner = styled(Content)`
  flex-direction: column;
  width: 100%;
`;
export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 1.6rem;

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
