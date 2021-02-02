import React from "react";
import { connect } from "react-redux";
import * as types from "../../actions/types";

interface propInterface {
  index: number;
  products?: [
    {
      id: number;
      title: string;
      price: number;
      description: string;
      category: string;
      image: string;
    }
  ];
  clickEvent?: any;
}

// interface propType {
//   index: number;
// }

export const ProductCard = (props: propInterface) => {
  return (
    <div>
      {props.products && (
        <div className="card card-gap">
          {/* Define Grid */}
          <div className="insideCardGrid">
            <div>
              <img
                className="cardImage"
                src={props.products[props.index].image}
                alt={props.products[props.index].image}
              />
            </div>
            <div>
              <h2> {props.products[props.index].title}</h2>
              <h3>Category: {props.products[props.index].category}</h3>
              <div>
                <h4>Price: ₹{props.products[props.index].price}</h4>
              </div>
              <div className="sendToCartStyling">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (props.products)
                      props.clickEvent(props.products[props.index]);
                  }}
                >
                  Send to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  ...state.products,
});

const mapDispatchToProps = (dispatch: any) => ({
  clickEvent: (data: any) =>
    dispatch({ type: types.ADD_PRODUCT_TO_CART, payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
