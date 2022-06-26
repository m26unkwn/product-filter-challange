import {
  useContext,
  createContext,
  useState,
  Children,
  useReducer,
} from "react";

import { filterReducer } from "./filter-reducer";
const filterState = {
  sortByPrice: "",
  size: [],
  brands: [],
  gender: "",
};

const FilterContext = createContext(filterState);

const FilterProvider = ({ children }) => {
  const [filters, filterDispatch] = useReducer(filterReducer, filterState);

  return (
    <FilterContext.Provider value={{ filters, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
