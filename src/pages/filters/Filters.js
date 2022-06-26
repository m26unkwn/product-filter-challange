import React from "react";
import { useFilter } from "../../store/filter-provider";
import { FilterBrand } from "./components/FilterBrand";
import { FilterSize } from "./components/FilterSize";
import { SortGender } from "./components/SortGender";
import { SortPrice } from "./components/SortPrice";
import "./filter.css";

export const Filters = () => {
  const { filterDispatch } = useFilter();
  const clearAllFilter = () => {
    filterDispatch({ type: "CLEAR_ALL_FILTER" });
  };
  return (
    <main className='filter-content'>
      <div className='filter-head flex jc-between ai-center'>
        <h2>Filters</h2>
        <button className='btn outline-primary' onClick={clearAllFilter}>
          Clear All
        </button>
      </div>
      <div className='filter-item-container'>
        <SortPrice />
        <div className='card-divider'></div>
        <FilterBrand />
        <div className='card-divider'></div>
        <FilterSize />
        <div className='card-divider'></div>
        <SortGender />
      </div>
    </main>
  );
};
