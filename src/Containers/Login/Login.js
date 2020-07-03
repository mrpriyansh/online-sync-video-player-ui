import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Form.module.css';

const Login = () => {
  return (
    <div className={styles.box}>
      <form className={styles.form}>
        <h2 className={styles.h2}>Login</h2>
        <input className={styles.input} id="email" type="email" placeholder="Email" />
        <br />
        <input className={styles.input} id="password" type="password" placeholder="Password" />
        <br />
        <input className={styles.btn} type="submit" value="Log In" />
        <p className={styles.p}>
          Not Registered? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
