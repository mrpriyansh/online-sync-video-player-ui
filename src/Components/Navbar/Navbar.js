import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const navbar = props => (
  <header className={styles.navbar}>
    <nav className={styles.navbar__navigation}>
      <div>
        <Link to="/">
          <img className={styles.navbar__logo} alt="home" src="favicon.ico" />
        </Link>
      </div>
      <div className={styles.spacer}></div>
      <div className={styles.navbar_navigation_items}>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navbar;
