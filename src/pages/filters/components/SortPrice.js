import React from "react";

export const SortPrice = () => {
  return (
    <div className='filter-price filter-item flex flex-col flex-gap'>
      <h4>Price</h4>
      <div className=' flex flex-col flex-gap'>
        <label htmlFor='sort_1' className='flex flex-gap'>
          <input type='radio' name='sort' id='sort_1' />
          Low To High
        </label>
        <label htmlFor='sort_2' className='flex flex-gap'>
          <input type='radio' name='sort' id='sort_2' />
          <span>High To Low</span>
        </label>
      </div>
    </div>
  );
};
