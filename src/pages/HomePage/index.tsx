import { useEffect, useState } from 'react';
import AppHeader from '../../components/AppHeader';
import { ProductType } from '../../types/product';
import { getProducts } from '../../services/productsService';
import { ClipLoader } from 'react-spinners';
import * as S from './styles';
import BannerMessage from '../../components/BannerMessage';
import ProductCard from '../../components/ProductCard';
import ImageSvg from '../../assets/reload.svg';

export default function Home() {
  const [productsList, setProducts] = useState<ProductType[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  const handleReloadPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    setIsLoadingProducts(true);
    getProducts()
      .then((product) => {
        setProducts(product);
      })
      .finally(() => {
        setIsLoadingProducts(false);
      });
  }, []);

  return (
    <>
      <AppHeader />
      <>
        {isLoadingProducts && (
          <S.ContentLoader>
            <ClipLoader
              color='#808080'
              size={83}
              aria-label='Loading Spinner'
              data-testid='loader'
            />
          </S.ContentLoader>
        )}
        {!isLoadingProducts && productsList.length === 0 && (
          <S.Content>
            <BannerMessage
              title='Parece que não há nada por aqui :('
              image={ImageSvg}
              textButton='Recarregar página'
              buttonClick={handleReloadPage}
            />
          </S.Content>
        )}
        {!isLoadingProducts && productsList.length > 0 && (
          <S.CardConteiner>
            <S.CardContent>
              {productsList.map((product) => (
                <ProductCard key={product.id} productData={product} />
              ))}
            </S.CardContent>
          </S.CardConteiner>
        )}
      </>
    </>
  );
}
