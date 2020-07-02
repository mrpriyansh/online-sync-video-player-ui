import React from 'react';
import styles from './Navbar.module.css'

const navbar = props => (
    <header className={styles.navbar}>
        <nav className={styles.navbar__navigation}>
            <div className={styles.navbar__logo}><a href="/">timepass</a></div>
            <div className={styles.spacer}></div>
            <div className={styles.navbar_navigation_items}>
                {/* <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Login</a></li>
                    <li><a href="/">Register</a></li>
                    <li><a href="/">Contact</a></li>
                </ul> */}
            </div>
        </nav>
    </header>
);

export default navbar;