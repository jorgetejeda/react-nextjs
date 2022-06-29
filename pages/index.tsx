import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Link from 'next/link';

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((reponse) => reponse.json())
      .then(({ data, length }) => {
        setProductList(data);
      })
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Products</h1>
      {productList.map((product) => (
        <div>
          <Link href={`/product/${product.id}`}>
            <a>{product.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
