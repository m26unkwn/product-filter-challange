import React from "react";
import { isChecked } from "../../../helper";
import { useFilter } from "../../../store/filter-provider";

export const FilterBrand = () => {
  const {
    filters: { brands },
    filterDispatch,
  } = useFilter();

  const dispatchFilterByBrands = (e, value) => {
    if (e.target.checked) {
      filterDispatch({ type: "ADD_FILTER_BY_BRANDS", payload: value });
    } else {
      filterDispatch({ type: "REMOVE_FILTER_BY_BRANDS", payload: value });
    }
  };

  return (
    <div className='filter-brand filter-item flex flex-col flex-gap'>
      <h4>Brands</h4>
      <div className=' flex flex-col flex-gap'>
        <label htmlFor='checkbox_1' className='flex flex-gap'>
          <input
            type='checkbox'
            name='brand'
            id='checkbox_1'
            onChange={(e) => dispatchFilterByBrands(e, "adidas")}
            checked={isChecked(brands, "adidas")}
          />
          <span>Adidas</span>
        </label>
        <label htmlFor='checkbox_2' className='flex flex-gap'>
          <input
            type='checkbox'
            name='brand'
            id='checkbox_2'
            onChange={(e) => dispatchFilterByBrands(e, "spykar")}
            checked={isChecked(brands, "spykar")}
          />
          <span>Spykar</span>
        </label>
        <label htmlFor='checkbox_3' className='flex flex-gap'>
          <input
            type='checkbox'
            name='brand'
            id='checkbox_3'
            onChange={(e) => dispatchFilterByBrands(e, "levi's")}
            checked={isChecked(brands, "levi's")}
          />
          <span>Levi's</span>
        </label>
      </div>
    </div>
  );
};
