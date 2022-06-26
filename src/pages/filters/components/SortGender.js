import React from "react";
import { useFilter } from "../../../store/filter-provider";

export const SortGender = () => {
  const {
    filters: { gender },
    filterDispatch,
  } = useFilter();

  const dispatchSortByGender = (e, value) => {
    if (e.target.checked) {
      filterDispatch({ type: "FILTER_BY_GENDER", payload: value });
    }
  };
  return (
    <div className='filter-gender filter-item flex flex-col flex-gap'>
      <h4>Price</h4>
      <div className=' flex flex-col flex-gap'>
        <label htmlFor='sort_gender_1' className='flex flex-gap'>
          <input
            type='radio'
            name='gender'
            id='sort_gender_1'
            checked={gender === "male"}
            onChange={(e) => dispatchSortByGender(e, "male")}
          />
          <span>Male</span>
        </label>
        <label htmlFor='sort_gender_2' className='flex flex-gap'>
          <input
            type='radio'
            name='gender'
            id='sort_gender_2'
            checked={gender === "female"}
            onChange={(e) => dispatchSortByGender(e, "female")}
          />
          <span>Female</span>
        </label>
      </div>
    </div>
  );
};
