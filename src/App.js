import React from "react";
import { useFetch } from "./hooks";
import "./app.css";
import { Products, Header, Filters } from "./pages";

export const App = () => {
  const [products] = useFetch("./products.json");

  return (
    <div className='app-container'>
      <Header />
      {products ? (
        <main className='main-product-container'>
          <section className='filter-section'>
            <Filters />
          </section>
          <section className='products-section'>
            <h1 className='flex jc-center'>Products</h1>
            <Products products={products} />
          </section>
        </main>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};
