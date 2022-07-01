import React, { useEffect, useState } from 'react';
import { GetServerSideProps, GetStaticProps } from 'next/types';
import Link from 'next/link';

// SSG - estatica
// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const response = await fetch('https://platzi-avo.vercel.app/api/avo');
//   const { data: productList }: TAPIAvoResponse = await response.json();

//   return {
//     props: {
//       productList,
//     },
//   };
// };

// SSR
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch('http://localhost:3000/api/avo');
  const { data: productList }: TAPIAvoResponse = await response.json();

  return {
    props: {
      productList,
    },
  };
};

const Home = ({ productList }: { productList: TProduct[] }) => {
  // const [productList, setProductList] = useState<TProduct[]>([]);

  //clienet side rendering (CRS)
  // useEffect(() => {
  //   window
  //     .fetch('/api/avo')
  //     .then((reponse) => reponse.json())
  //     .then(({ data, length }) => {
  //       setProductList(data);
  //     })
  //     .catch((error) => console.error(error.message));
  // }, []);

  return (
    <div>
      <h1>Products</h1>
      {productList?.map((product) => (
        <div key={product.id}>
          <Link 
            href='/product/[id]'
            as={`/avocado/${product.id}`}>
            <a>{product.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
