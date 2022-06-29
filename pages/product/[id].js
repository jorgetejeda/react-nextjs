import { useRouter } from 'next/router';
import React from 'react'

const ProductItem = () => {
  const { id } = useRouter().query

  return (
    <div>ProductItem: {id}</div>
  )
}

export default ProductItem