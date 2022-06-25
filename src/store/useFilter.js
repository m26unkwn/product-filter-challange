import { useContext, createContext, useState, Children } from "react";

const filterState = {
  sortByPrice: "",
  size: [],
  brand: [],
  gender: [],
};

const Filter = createContext(filterState);

const FilterProvider = (children) => {
  const [filters, setFilters] = useState(filterState);

  return <Filter.Provider>{children}</Filter.Provider>;
};
