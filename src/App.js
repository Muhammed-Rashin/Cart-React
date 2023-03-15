import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import { CartContext } from "./store/cartContext";
import { useState } from "react";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cartProducts, setCartProducts }}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
