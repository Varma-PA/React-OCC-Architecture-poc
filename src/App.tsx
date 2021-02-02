import React from "react";
import "./App.css";
import ProductList from "./components/product-list";
import CartModal from "./components/cart-modal";

function App() {
  return (
    <div>
      <nav className="navbar navbar-light bg-primary">
        <div className="navbar-brand">The Shopping Website</div>
        {/* <button className="btn btn-primary my-2 my-sm-0">Cart</button> */}
        <CartModal />
      </nav>
      <div className="container">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
