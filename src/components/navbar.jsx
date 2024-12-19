import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>SRShop</h1>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
}

export default Navbar;
