export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sortByPrice: action.payload };
    case "FILTER_BY_GENDER":
      return { ...state, gender: action.payload };
    case "CLEAR_ALL_FILTER":
      return {
        sortByPrice: "",
        size: [],
        brands: [],
        gender: "",
      };
  }
};
