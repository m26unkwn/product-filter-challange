import React from "react";
import { Product } from "../../components";
import { filterProducts } from "../../helper";
import { useFilter } from "../../store/filter-provider";

export const Products = ({ products }) => {
  const { filters } = useFilter();

  const filteredProducts = filterProducts(products, filters);
  console.log(filteredProducts);
  console.log(filters);
  return (
    <div className='products-container'>
      <div className='flex flex-wrap flex-gap jc-center'>
        {filteredProducts ? (
          filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <h1>Sorry No Product Found</h1>
        )}
      </div>
    </div>
  );
};
