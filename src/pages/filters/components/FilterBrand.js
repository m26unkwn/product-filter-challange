import React from "react";

export const FilterBrand = () => {
  return (
    <div className='filter-brand filter-item flex flex-col flex-gap'>
      <h4>Brands</h4>
      <div className=' flex flex-col flex-gap'>
        <label htmlFor='checkbox_1' className='flex flex-gap'>
          <input type='checkobx' name='sort' id='sort1' />
          Low To High
        </label>
        <label htmlFor='sort2' className='flex flex-gap'>
          <input type='radio' name='sort' id='sort2' />
          <span>High To Low</span>
        </label>
      </div>
    </div>
  );
};
