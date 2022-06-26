import React from "react";
import { useFilter } from "../../../store/filter-provider";
import { isChecked } from "../../../helper";

export const FilterSize = () => {
  const {
    filters: { size },
    filterDispatch,
  } = useFilter();

  const dispatchFilterBySize = (e, value) => {
    if (e.target.checked) {
      filterDispatch({ type: "ADD_FILTER_BY_SIZE", payload: value });
    } else {
      filterDispatch({ type: "REMOVE_FILTER_BY_SIZE", payload: value });
    }
  };

  return (
    <div className='filter-size filter-item flex flex-col flex-gap'>
      <h4>Sizes</h4>
      <div className=' flex flex-col flex-gap'>
        <label htmlFor='checkbox_size_1' className='flex flex-gap'>
          <input
            type='checkbox'
            name='size'
            id='checkbox_size_1'
            onChange={(e) => dispatchFilterBySize(e, "s")}
            checked={isChecked(size, "s")}
          />
          <span>S</span>
        </label>
        <label htmlFor='checkbox_size_2' className='flex flex-gap'>
          <input
            type='checkbox'
            name='size'
            id='checkbox_size_2'
            onChange={(e) => dispatchFilterBySize(e, "m")}
            checked={isChecked(size, "m")}
          />
          <span>M</span>
        </label>
        <label htmlFor='checkbox_size_3' className='flex flex-gap'>
          <input
            type='checkbox'
            name='size'
            id='checkbox_size_3'
            onChange={(e) => dispatchFilterBySize(e, "l")}
            checked={isChecked(size, "l")}
          />
          <span>L</span>
        </label>

        <label htmlFor='checkbox_size_4' className='flex flex-gap'>
          <input
            type='checkbox'
            name='size'
            id='checkbox_size_4'
            onChange={(e) => dispatchFilterBySize(e, "xl")}
            checked={isChecked(size, "xl")}
          />
          <span>XL</span>
        </label>
      </div>
    </div>
  );
};
