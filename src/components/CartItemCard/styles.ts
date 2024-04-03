import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Content = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.6rem;

  @media (min-width: ${theme.breakpoints.md}) {
    gap: 0;
    align-items: center;
    padding: 2.4rem;
  }
`;
export const QuantityContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 2.6rem;
  border: 1px solid #d9d9d9;
  border-radius: ${theme.border.radius};

  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.medium};
  font-weight: ${theme.font.normal};
  line-height: 19px;
`;
export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin-right: 1.6rem;
`;
export const QuantityController = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: ${theme.breakpoints.md}) {
    align-items: center;
    gap: 40%;
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    gap: 90%;
  }
  @media (min-width: ${theme.breakpoints.xxl}) {
    gap: 123%;
  }
`;

export const ContentController = styled.div`
  width: 100%;

  @media (min-width: ${theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    gap: 11%;
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    gap: 19.5%;
  }
  @media (min-width: ${theme.breakpoints.xxl}) {
    gap: 23%;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.6rem;
  margin-right: 1.6rem;
  @media (min-width: ${theme.breakpoints.md}) {
    margin: 0;
    flex-direction: column;
  }
`;
export const ProductPrice = styled.span`
  font-family: ${theme.font.family};
  font-size: 1.6rem;
  font-weight: ${theme.font.extraBold};
  line-height: 22px;
  color: ${theme.colors.darkGrayishBlue};
`;
export const CartCardTitle = styled.h2`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.extraBold};
  font-size: ${theme.font.sizes.medium};
  line-height: 19px;
  max-width: 6rem;
  color: ${theme.colors.darkGrayishBlue};

  @media (min-width: ${theme.breakpoints.md}) {
    max-width: inherit;
    width: 11rem;
  }
`;

export const SubTitle = styled.h2`
  font-family: ${theme.font.family};
  font-size: 1.2rem;
  font-weight: ${theme.font.extraBold};
  line-height: 16px;
  color: ${theme.colors.neutral_gray};

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;
export const SubContent = styled.div`
  min-width: 7.5rem;
`;

export const ButtonIcon = styled.div`
  cursor: pointer;
`;
export const ImageContent = styled.img`
  margin-right: 1.6rem;
`;

export const Line = styled.div`
  margin: 0.5rem auto;
  width: 96%;
  border-bottom: 1px solid ${theme.colors.neutral_gray};
`;
