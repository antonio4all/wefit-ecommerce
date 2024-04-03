import AppHeader from '../../components/AppHeader';
import BannerMessage from '../../components/BannerMessage';
import EmptyCart from '../../assets/emptyCart.svg';
import * as S from './styles';
import CheckoutButton from './components/checkoutButton';
import CartItemCard from '../../components/CartItemCard';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { CartProduct } from '../../types/cartProduct';

export default function Cart() {
  const useStorage = useCartContext();
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  const cartTotalPrice: number = useStorage.cart.reduce(
    (acc: number, currentItem: CartProduct) => {
      return acc + currentItem.price * currentItem.quantity;
    },
    0
  );

  return (
    <div>
      <AppHeader />
      <>
        {useStorage.cart.length <= 0 && (
          <S.ContainerController>
            <BannerMessage
              title='Seu carrinho está vazio :('
              image={EmptyCart}
              textButton='Voltar'
              buttonClick={handleClick}
            />
          </S.ContainerController>
        )}
        {useStorage.cart.length > 0 && (
          <S.ContainerController>
            <S.ContentController>
              <S.HeadTable>
                <S.TableItem>Produto</S.TableItem>
                <S.TableItem>QTD</S.TableItem>
                <S.TableItem>Subtotal</S.TableItem>
              </S.HeadTable>
              {useStorage.cart.map((CartItem: CartProduct) => (
                <CartItemCard key={CartItem.id} product={CartItem} />
              ))}
              <S.ContentCheckout>
                <S.Checkout>
                  <S.TotalTitle>Total</S.TotalTitle>
                  <S.TotalPrice>
                    {cartTotalPrice.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </S.TotalPrice>
                </S.Checkout>
                <CheckoutButton />
              </S.ContentCheckout>
            </S.ContentController>
          </S.ContainerController>
        )}
      </>
    </div>
  );
}
