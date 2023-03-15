import React, { useContext } from "react";
import "./product-card.css";
import { CartContext } from "../../store/cartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function ProductCard({ product, products, setProducts, cart }) {
  const MySwal = withReactContent(Swal);
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const addProductToCart = (product) => {
    if (cartProducts.some((elem) => product._id === elem._id)) {
      MySwal.fire({ title: "Item Already On Your Cart", icon: "warning" });
    } else {
      setCartProducts([...cartProducts, product]);
      MySwal.fire({ title: "Item Added To Cart", icon: "success" });

    }
  };

  const removeFromCart = (product) => {
    const newProducts = cartProducts.filter((element) => {
      if (element._id !== product._id) return element;
    });
    setCartProducts(newProducts);
    MySwal.fire({ title: "Item Removed From Cart", icon: "success" });

  };

  return (
    <div>
      <div className="card">
        <div className="product-img">
          <img src={product.imageUrl} alt="Product" />
          {cart ? (
            <button
              className="add-cart-btn"
              onClick={() => removeFromCart(product)}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="add-cart-btn"
              onClick={() => addProductToCart(product)}
            >
              Add to Cart
            </button>
          )}
        </div>
        <div className="product-details">
          <h3>{product.name}</h3>
          <h4>₹ {product.price}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
