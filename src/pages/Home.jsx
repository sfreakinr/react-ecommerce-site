import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1>Welcome to SRShop</h1>
        <p>Discover the best products, amazing deals, and seamless shopping experience, all in one place!</p>
        <div className={styles.buttons}>
          <Link to="/products" className={styles.shopButton}>
            Shop Now
          </Link>
          <Link to="/login" className={styles.loginButton}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
