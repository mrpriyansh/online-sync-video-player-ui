import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Form.module.css';

const Register = () => {
  return (
    <div className={styles.box}>
      <form className={styles.form}>
        <h2 className={styles.h2}>Register</h2>
        <input className={styles.input} id="name" type="text" placeholder="Full Name" />
        <br />
        <input className={styles.input} id="email" type="email" placeholder="Email" />
        <br />
        <input className={styles.input} id="password" type="password" placeholder="Password" />
        <br />
        <input
          className={styles.input}
          id="password"
          type="password"
          placeholder="Confirm Password"
        />
        <br />
        <input className={styles.btn} type="submit" />
        <p className={styles.p}>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
