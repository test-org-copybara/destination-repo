// Helper utilities
export const formatDate = (date) => {
  return date.toISOString();
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
