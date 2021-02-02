import * as types from "../actions/types";

const initialState: any = {
  products: [],
};

interface actionType {
  type: string;
  payload?: string;
}

const ProductReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case types.GET_PRODUCTS_ASYNC:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default ProductReducer;
