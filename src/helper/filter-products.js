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
    return products.filter((product) =>
      values.includes(product[filter].toLowerCase()),
    );
  }
  return products;
};

// filter by gender
const filterByGender = (products, value) => {
  if (value) {
    return products.filter((product) => product.gender.toLowerCase() === value);
  }
  return products;
};

export const filterProducts = (products, filters) => {
  let filteredProducts = [...products];

  filteredProducts = sortByPrice(products, filters.sortByPrice);
  filteredProducts = filterByCheckbbx(products, "brand", filters.brands);
  filteredProducts = filterByCheckbbx(products, "size", filters.size);
  filteredProducts = filterByGender(products, filters.gender);

  return filteredProducts;
};
