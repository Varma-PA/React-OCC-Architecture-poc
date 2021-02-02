import * as types from "./types";

const fetchProducts = () => {
  return {
    type: types.GET_PRODUCTS,
  };
};

export { fetchProducts };
