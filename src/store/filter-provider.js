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

const Filter = createContext(filterState);

const FilterProvider = (children) => {
  const [filters, filterDispatch] = useReducer(filterReducer, filterState);

  return (
    <Filter.Provider value={{ filters, setFi }}>{children}</Filter.Provider>
  );
};

const useFilter = () => useContext(Filter);

export { FilterProvider, useFilter };
