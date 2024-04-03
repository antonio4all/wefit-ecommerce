import AppHeader from '../../components/AppHeader';
import BannerMessage from '../../components/BannerMessage';
import * as H from '../HomePage/styles';
import { useNavigate } from 'react-router-dom';
import CheckoutImg from '../../assets/checkout.svg';

export default function Checkout() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }
  return (
    <div>
      <AppHeader />
      <H.Content>
        <BannerMessage
          title='Compra realizada com sucesso!'
          image={CheckoutImg}
          textButton='Voltar'
          buttonClick={handleClick}
        />
      </H.Content>
    </div>
  );
}
