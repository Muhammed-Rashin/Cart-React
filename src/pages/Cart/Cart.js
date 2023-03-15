import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CartContext } from "../../store/cartContext";

function Cart() {
  const navbarElems = [
    {
      text: "Products",
      url: "/",
    },
  ];
  const { cartProducts, setCartProducts } = useContext(CartContext);
  return (
    <div>
      <Navbar elements={navbarElems} />

      {cartProducts.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>Cart Is Empty</h1>
      ) : (
       <div>
           <h2 style={{textAlign:"center"}}>Your Cart</h2>
        <div className="container">

          {cartProducts.map((product) => {
            return (
              <div key={product._id}>
                <ProductCard cart product={product} />
              </div>
            );
          })}
        </div>
       </div>
      )}
    </div>
  );
}

export default Cart;
