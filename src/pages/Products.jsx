import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Products.module.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className={styles.productsPage}>
      <h1>Our Products</h1>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button className={styles.button}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
