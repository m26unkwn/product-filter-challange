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
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
