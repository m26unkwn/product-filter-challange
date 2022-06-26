// sort by price

const sortByPrice = (products, value) => {
  if (value === "low") {
    return products.sort((a, b) => a.price - b.price);
  } else if (value === "high") {
    return products.sort((a, b) => b.price - a.price);
  }
  return products;
};

// filter the products with checkbox

const filterByCheckbbx = (products, filter, values) => {
  if (values.length > 0) {
    let result = products.filter((product) =>
      values.includes(product[filter].toLowerCase()),
    );
    console.log(result);
    return result;
  }
  return products;
};

// filter by gender
const filterByGender = (products, value) => {
  if (value.length > 0) {
    return products.filter((product) => product.gender.toLowerCase() === value);
  }
  return products;
};

export const filterProducts = (products, filters) => {
  let filteredProducts = [...products];

  filteredProducts = sortByPrice(filteredProducts, filters.sortByPrice);
  filteredProducts = filterByCheckbbx(
    filteredProducts,
    "brand",
    filters.brands,
  );
  filteredProducts = filterByCheckbbx(filteredProducts, "size", filters.size);
  filteredProducts = filterByGender(filteredProducts, filters.gender);

  return filteredProducts;
};
