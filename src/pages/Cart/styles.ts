import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentController = styled.div`
  width: 100%;
  margin: 0 2.4rem;

  background-color: ${theme.colors.white};
  border-radius: ${theme.border.radius};

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
export const ContentCheckout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 2.4rem;
  }
`;

export const Checkout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
  @media (min-width: ${theme.breakpoints.md}) {
    gap: 2.6rem;
    padding: 0;
  }
`;
export const TotalTitle = styled.div`
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.medium};
  font-weight: ${theme.font.extraBold};
  line-height: 19px;
  color: ${theme.colors.neutral_gray};
`;
export const TotalPrice = styled(TotalTitle)`
  font-size: 2.4rem;
  line-height: 33px;
  color: ${theme.colors.darkGrayishBlue};
`;
export const HeadTable = styled.div`
  width: 80%;
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 2.4rem 0 2.4rem;

  @media (min-width: ${theme.breakpoints.md}) {
    display: flex;
  }
`;
export const TableItem = styled(TotalTitle)``;
