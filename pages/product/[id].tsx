import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    const fecthData = async () => {
      const response = await fetch(`/api/avo/${id}`)
      const data = await response.json()
      setProduct(data)
    }
    id && fecthData()
  }, [id]);

  return (
    <>
      <div>ProductItem: {id}</div>
      <div>{product?.name}</div>
    </>
  );
};

export default ProductItem;
