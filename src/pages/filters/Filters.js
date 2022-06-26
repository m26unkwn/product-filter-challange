import React from "react";
import { SortPrice } from "./components/SortPrice";
import "./filter.css";

export const Filters = () => {
  return (
    <main className='filter-content'>
      <div className='filter-head flex jc-between ai-center'>
        <h2>Filters</h2>
        <button className='btn outline-primary'>Clear All</button>
      </div>
      <div className='filter-item-container'>
        <SortPrice />
        <div className='card-divider'></div>
      </div>
    </main>
  );
};
