import React, { useEffect } from "react";
import { connect } from "react-redux";
import ProductCard from "../product-card";
import { fetchProducts } from "../../actions/fetch-products";

interface propInterface {
  products?: any;
  theProducts?: any;
}

export const ProductList = (props: propInterface) => {
  useEffect(() => {
    props.theProducts();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {props.products && props.products.length > 0 ? (
        <>
          {props.products.map((value: any, index: any) => (
            <ProductCard key={index} index={index} />
          ))}
        </>
      ) : (
        <>
          <h2>Loading...</h2>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  ...state.products,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    theProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
