import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 8.8rem;
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

export const StyledLink = styled(Link)`
  font-family: ${theme.font.family};
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.large};
  font-weight: ${theme.font.extraBold};
  line-height: 2.7rem;
  text-decoration: none;
`;
export const StyledCartLink = styled(Link)`
  text-decoration: none;
`;
export const CartLinkContent = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.white};
`;
export const CartTextContent = styled(CartLinkContent)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 0.8rem;
  min-width: 10rem;
`;
export const CartText = styled.p`
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.medium};
  font-weight: ${theme.font.bold};
  line-height: 1.9rem;

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;
export const CartTextSpan = styled.span`
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.bold};
  line-height: 16px;
  color: ${theme.colors.neutral_gray};
`;
