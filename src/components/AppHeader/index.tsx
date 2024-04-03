import * as S from './styles';
import CartSvg from '../../assets/Cart.svg';
import { useCartContext } from '../../context/CartContext';

export default function AppHeader() {
  const { totalItems } = useCartContext();

  return (
    <S.NavContainer>
      <S.NavContent>
        <S.StyledLink to={'/'}>WeMovies</S.StyledLink>
        <S.StyledCartLink to={'/cart'}>
          <S.CartLinkContent>
            <S.CartTextContent>
              <S.CartText>Meu Carrinho</S.CartText>
              <S.CartTextSpan>{`${totalItems} itens`}</S.CartTextSpan>
            </S.CartTextContent>
            <img src={CartSvg} alt='Ícone Cart' width={24} height={24} />
          </S.CartLinkContent>
        </S.StyledCartLink>
      </S.NavContent>
    </S.NavContainer>
  );
}
