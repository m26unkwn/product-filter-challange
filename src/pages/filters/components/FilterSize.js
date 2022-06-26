import React from "react";

export const FilterSize = () => {
  return (
    <div className='filter-size filter-item flex flex-col flex-gap'>
      <h4>Sizes</h4>
      <div className=' flex flex-col flex-gap'>
        <label htmlFor='checkbox_1' className='flex flex-gap'>
          <input type='checkbox' name='brand' id='checkbox_1' />
          <span>S</span>
        </label>
        <label htmlFor='checkbox_2' className='flex flex-gap'>
          <input type='checkbox' name='brand' id='checkbox_2' />
          <span>M</span>
        </label>
        <label htmlFor='checkbox_3' className='flex flex-gap'>
          <input type='checkbox' name='brand' id='checkbox_3' />
          <span>L</span>
        </label>
        <label htmlFor='checkbox_3' className='flex flex-gap'>
          <input type='checkbox' name='brand' id='checkbox_3' />
          <span>L</span>
        </label>{" "}
        <label htmlFor='checkbox_4' className='flex flex-gap'>
          <input type='checkbox' name='brand' id='checkbox_4' />
          <span>XL</span>
        </label>
      </div>
    </div>
  );
};
