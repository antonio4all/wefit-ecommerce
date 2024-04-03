import { ProductType } from "../types/product";


export async function getProducts(): Promise<ProductType[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'Viúva Negra',
          price: 9.99,
          image:
            'https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png',
        },
        {
          id: 2,
          title: 'Shang-chi',
          price: 30.99,
          image: 'https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png',
        },
        {
          id: 3,
          title: 'Homem Aranha',
          price: 29.9,
          image: 'https://wefit-react-web-test.s3.amazonaws.com/spider-man.png',
        },
        {
          id: 5,
          title: 'Morbius',
          price: 1.5,
          image: 'https://wefit-react-web-test.s3.amazonaws.com/morbius-1.png',
        },
        {
          id: 6,
          title: 'Batman',
          price: 21.9,
          image: 'https://wefit-react-web-test.s3.amazonaws.com/the-batman.png',
        },
        {
          id: 4,
          title: 'Eternos',
          price: 17.9,
          image: 'https://wefit-react-web-test.s3.amazonaws.com/eternals.png',
        },
      ]);
    }, 3000);
  });
}
