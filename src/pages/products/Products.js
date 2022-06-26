import React from "react";
import { Product } from "../../components";
import { filterProducts } from "../../helper/fiter-products";

export const Products = ({ products }) => {
 const filteredProducts = filterProducts(products,filters)
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
