import React from "react";
import { useAxios } from "./hooks";
import "./app.css";
import { Products } from "./pages";

export const App = () => {
  const [products, loading] = useAxios("./products.json");

  return (
    <div className='app-container'>
      {products ? (
        <>
          <section className='filter-section'>Filters</section>
          <section className='products-section'>
            <h1>Products</h1>
            <Products products={products} />
          </section>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};
