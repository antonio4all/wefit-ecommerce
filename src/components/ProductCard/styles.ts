import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 1.6rem;

  @media (min-width: ${theme.breakpoints.sm}) {
    width: 47.9%;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    width: 31.8%;
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    width: 32.2%;
  }
  @media (min-width: ${theme.breakpoints.xxl}) {
    width: 32.3%;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${theme.colors.white};
  border-radius: ${theme.border.radius};
  gap: 1rem;
  padding: 1.6rem 0;
  margin: 0 2.4rem;
  @media (min-width: ${theme.breakpoints.md}) {
    margin: 0;
  }
`;
export const Title = styled.h1`
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.extraBold};
  line-height: 16px;
  padding: 0.8rem 0;
`;
export const Price = styled.span`
  font-family: ${theme.font.family};
  font-size: 1.6rem;
  font-weight: ${theme.font.extraBold};
  line-height: 22px;
  padding: 0.8rem 0;
`;
export const StyledButton = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.active ? "#039B00" : "#009EDD")};
  border-radius: ${theme.border.radius};
  padding: 1.1rem 0;
  margin: 0 1.6rem;
  height: 4rem;
  width: 90%;
  cursor: pointer;
`;
export const StyledIcon = styled.div`
  display: flex;
  margin-right: 1.2rem;

  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.normal};
  color: ${theme.colors.white};
  line-height: 16px;
`;
export const ButtonText = styled.span`
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.extraBold};
  color: ${theme.colors.white};
  line-height: 16px;
`;
export const StyledIconImg = styled.img`
  margin-right: 0.3rem;
`;
