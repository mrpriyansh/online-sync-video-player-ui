import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useAuth } from '../../service/hooks/Auth';

const Navbar = props => {
  const { authToken, setAuthToken, setCurrentUser } = useAuth();
  const history = useHistory();
  const handleLogout = event => {
    setAuthToken(false);
    localStorage.removeItem('token');
    setCurrentUser(null);
    history.replace('/');
  };
  return (
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
            {!authToken ? (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            ) : (
              <li>
                <div onClick={handleLogout} className={styles.logout_button}>
                  {' '}
                  Logout{' '}
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
