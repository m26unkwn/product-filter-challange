export const isChecked = (filters, value) => {
  return filters.some((filter) => filter === value);
};
