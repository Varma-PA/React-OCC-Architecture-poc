import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import * as types from "../../actions/types";

interface valueType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const CartModal = (props: any) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    props.getProducts();

    if (props.cart) setProducts(props.cart);

    // eslint-disable-next-line
  }, [products]);

  return (
    <div>
      <button className="btn btn-primary my-2 my-sm-0" onClick={handleShow}>
        Cart{" "}
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Hello There</div>
          {products && products.length > 0 ? (
            <>
              <ul>
                {products.map((value: valueType, index: number) => (
                  <li key={index}>
                    <div className="cartModalList">
                      <div>{value.title}</div>
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={(event: any) => {
                          event.preventDefault();

                          const theNewProduct = [...products];

                          theNewProduct.splice(index, 1);

                          setProducts([...theNewProduct]);
                          props.removeProduct(index);
                        }}
                      >
                        X
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <></>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state: any) => ({ ...state.cart });

const mapDispatchToProps = (dispatch: any) => ({
  getProducts: () => dispatch({ type: types.GET_PRODUCTS_FROM_CART }),
  removeProduct: (index: number) =>
    dispatch({ type: types.REMOVE_SINGLE_PRODUCT, payload: index }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
