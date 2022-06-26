import React from "react";
import { useFilter } from "../../../store/filter-provider";

export const FilterBrand = () => {
  const { filterDispatch } = useFilter();

  

  return (
    <div className='filter-brand filter-item flex flex-col flex-gap'>
      <h4>Brands</h4>
      <div className=' flex flex-col flex-gap'>
        <label htmlFor='checkbox_1' className='flex flex-gap'>
          <input type='checkbox' name='brand' id='checkbox_1' />
          <span>Addidas</span>
        </label>
        <label htmlFor='checkbox_2' className='flex flex-gap'>
          <input type='checkbox' name='brand' id='checkbox_2' />
          <span>Spikar</span>
        </label>
        <label htmlFor='checkbox_3' className='flex flex-gap'>
          <input type='checkbox' name='brand' id='checkbox_3' />
          <span>Levi's</span>
        </label>
      </div>
    </div>
  );
};
