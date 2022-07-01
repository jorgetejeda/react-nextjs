import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';

// Dynamic static generation: DSG
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo');
  const { data: productList }: TAPIAvoResponse = await response.json();

  const paths = productList.map(({ id }) => ({
    params: {
      id,
    },
  }));

  return {
    // paths: [{ params: { id: ... } }],
    paths,
    fallback: false,
  };
};

// pagina dinamica -
// buil time - nextjs - antemano, necesita saber las paginas que se generaran
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const response = await fetch(`https://platzi-avo.vercel.app/api/avo/${id}`);
  const data: TProduct = await response.json();
  return {
    props: {
      product: data,
    },
  };
};

const ProductItem = ({ product }: { product: TProduct }) => {
  // const {
  //   query: { id },
  // } = useRouter();
  // const [product, setProduct] = useState<TProduct>();

  // // CSR
  // useEffect(() => {
  //   const fecthData = async () => {
  //     const response = await fetch(`/api/avo/${id}`);
  //     const data = await response.json();
  //     setProduct(data);
  //   };
  //   id && fecthData();
  // }, [id]);

  return (
    <>
      <div>ProductItem: {product?.id}</div>
      <div>{product?.name}</div>
    </>
  );
};

export default ProductItem;
