import React from "react";
import { Product } from "../../components";

export const Products = ({ products }) => {
  console.log(products);
  return (
    <div className='products-container'>
      <div className='flex flex-wrap flex-gap jc-center'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
