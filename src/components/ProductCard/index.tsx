import * as S from './styles';
import CartPlus from '../../assets/CartPlus.svg';
import { ProductType } from '../../types/product';
import { useCartContext } from '../../context/CartContext';
import { CartProduct } from '../../types/cartProduct';

interface ProductCardProps {
  productData: ProductType;
}

export default function ProductCard({ productData }: ProductCardProps) {
  const formattedPrice = productData?.price?.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const useStorage = useCartContext();

  function getProductQuantityById(
    cart: CartProduct[],
    id: number
  ): number | undefined {
    return cart.find((CartItem) => CartItem.id === id)?.quantity;
  }

  const quantity = getProductQuantityById(useStorage.cart, productData?.id);

  return (
    <S.Container>
      <S.Content>
        <img src={productData.image} alt='img' width={147} height={188} />
        <S.Title>{productData.title}</S.Title>
        <S.Price>{formattedPrice}</S.Price>

        <S.StyledButton
          active={quantity !== undefined ? true : false}
          onClick={() => {
            useStorage.addItem(productData);
          }}
        >
          <S.StyledIcon>
            <S.StyledIconImg src={CartPlus} alt='img' width={15} /> {quantity}
          </S.StyledIcon>
          <S.ButtonText>Adicionar ao Carrinho</S.ButtonText>
        </S.StyledButton>
      </S.Content>
    </S.Container>
  );
}
