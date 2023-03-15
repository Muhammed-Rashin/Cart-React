import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./products.css";

function Products() {
  const navbarElems = [
    {
      text: "Cart",
      url: "/cart",
    },
  ];
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
    .post("http://3.7.252.58:4001/product/getAllProduct")
    .then(({ data }) => {
      setProducts(data);
    });
  }, []);
  return (
    <main>
      <Navbar elements={navbarElems} />

      <h2>All Products</h2>
      <div className="container">
        {products.map((product) => {
          return (
            <div key={product._id}>
              <ProductCard
                product={product}
                products={products}
                setProducts={setProducts}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Products;
