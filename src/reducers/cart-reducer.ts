import * as types from "../actions/types";

const initialState: any = {
  cart: [],
};

interface actionType {
  type: string;
  payload?: string;
}

const CartReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      let cartProducts = state.cart;

      cartProducts.push(action.payload);

      return {
        ...state,
        cart: cartProducts,
      };

    case types.GET_PRODUCTS_FROM_CART:
      return {
        ...state,
      };

    case types.REMOVE_SINGLE_PRODUCT:
      const index = action.payload;
      const cartProducts1 = state.cart;
      cartProducts1.splice(index, 1);
      return {
        ...state,
        cart: cartProducts1,
      };

    default:
      return state;
  }
};

export default CartReducer;
