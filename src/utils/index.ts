import { useEffect, useState } from "react";

export const cleanObj = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (!value) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <v>(value: v, delay?: number) => {
  const [debounce, setdebounce] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setdebounce(value), delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);
  return debounce;
};
