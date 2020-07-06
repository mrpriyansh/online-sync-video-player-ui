import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from '../Form.module.css';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    fetch('https://localhost:3000/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className={styles.box}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2 className={styles.h2}>Login</h2>
        <input
          className={styles.input}
          name="email"
          type="email"
          placeholder="Email"
          ref={register}
          required
        />
        <br />
        <input
          className={styles.input}
          name="password"
          type="password"
          placeholder="Password"
          ref={register}
          required
        />
        <br />
        <input className={styles.btn} type="submit" value="login" />
        <p className={styles.p}>
          Not Registered? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
