export const cleanObj = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (!value) {
      delete result[key];
    }
  });
  return result;
};
