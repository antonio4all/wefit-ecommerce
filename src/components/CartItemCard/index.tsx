import * as S from './styles';
import Plus from '../../assets/plusCircle.svg';
import Minus from '../../assets/minusCircle.svg';
import Trash from '../../assets/trash.svg';
import { useCartContext } from '../../context/CartContext';
import { CartProduct } from '../../types/cartProduct';

interface ProductCardProps {
  product: CartProduct;
}

export default function CartItemCard({ product }: ProductCardProps) {
  const useStorage = useCartContext();

  return (
    <>
      <S.Content>
        <S.ImageContent
          src={product.image}
          alt={product.title}
          width={64}
          height={82}
        />
        <S.ContentController>
          <S.TitleContent>
            <S.CartCardTitle>{product.title}</S.CartCardTitle>
            <S.ProductPrice>
              {product.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </S.ProductPrice>
          </S.TitleContent>
          <S.QuantityController>
            <S.QuantityContainer>
              <S.ButtonIcon onClick={() => useStorage.removeQuantity(product)}>
                <img src={Minus} width={18} height={18} />
              </S.ButtonIcon>
              <S.QuantityContent>{product.quantity}</S.QuantityContent>
              <S.ButtonIcon onClick={() => useStorage.addItem(product)}>
                <img src={Plus} width={18} height={18} />
              </S.ButtonIcon>
            </S.QuantityContainer>
            <S.SubContent>
              <S.SubTitle>SUBTOTAL</S.SubTitle>
              <S.ProductPrice>
                {(product.price * product.quantity).toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </S.ProductPrice>
            </S.SubContent>
          </S.QuantityController>
        </S.ContentController>
        <S.ButtonIcon onClick={() => useStorage.removeItem(product.id)}>
          <img src={Trash} width={18} height={18} />
        </S.ButtonIcon>
      </S.Content>
      <S.Line></S.Line>
    </>
  );
}
