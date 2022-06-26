import React from "react";

export const SortGender = () => {
  return (
    <div className='filter-gender filter-item flex flex-col flex-gap'>
      <h4>Price</h4>
      <div className=' flex flex-col flex-gap'>
        <label htmlFor='sort_1' className='flex flex-gap'>
          <input type='radio' name='sort' id='sort_1' />
          <span>Male</span>
        </label>
        <label htmlFor='sort_2' className='flex flex-gap'>
          <input type='radio' name='sort' id='sort_2' />
          <span>Female</span>
        </label>
      </div>
    </div>
  );
};
