import React from "react";
import { useFilter } from "../../../store/filter-provider";

export const SortPrice = () => {
  const {
    filters: { sortByPrice },
    filterDispatch,
  } = useFilter();

  const dispatchSortByPrice = (e, value) => {
    if (e.target.checked) {
      filterDispatch({ type: "SORT_BY_PRICE", payload: value });
    }
  };
  return (
    <div className='filter-price filter-item flex flex-col flex-gap'>
      <h4>Price</h4>
      <div className=' flex flex-col flex-gap'>
        <label htmlFor='sort_1' className='flex flex-gap'>
          <input
            type='radio'
            name='sort'
            id='sort_1'
            onChange={(e) => dispatchSortByPrice(e, "low")}
            checked={sortByPrice === "low"}
          />
          Low To High
        </label>
        <label htmlFor='sort_2' className='flex flex-gap'>
          <input
            type='radio'
            name='sort'
            id='sort_2'
            checked={sortByPrice === "high"}
            onChange={(e) => dispatchSortByPrice(e, "high")}
          />
          <span>High To Low</span>
        </label>
      </div>
    </div>
  );
};
