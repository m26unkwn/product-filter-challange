export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sortByPrice: action.payload };

    case "FILTER_BY_GENDER":
      return { ...state, gender: action.payload };

    case "ADD_FILTER_BY_SIZE":
      return { ...state, size: state.size.concat(action.payload) };

    case "REMOVE_FILTER_BY_SIZE":
      const sizeFilter = state.size.filter((value) => value !== action.payload);
      return { ...state, size: sizeFilter };

    case "ADD_FILTER_BY_BRANDS":
      return { ...state, brands: state.brands.concat(action.payload) };

    case "REMOVE_FILTER_BY_BRANDS":
      const brandFilter = state.brands.filter(
        (value) => value !== action.payload,
      );
      return { ...state, brands: brandFilter };

    case "CLEAR_ALL_FILTER":
      return {
        sortByPrice: "",
        size: [],
        brands: [],
        gender: "",
      };
      
    default:
      return state;
  }
};
