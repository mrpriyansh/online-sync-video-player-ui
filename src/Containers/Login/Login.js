import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from '../Form.module.css';
import { apiUrl } from '../../service/config';
import handleError from '../../service/handleError';
import { triggerAlert } from '../../service/getAlert/getAlert';
import { useAuth } from '../../service/hooks/Auth';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { setAuthToken } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = data => {
    setIsLoading(true);
    fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => response.json().then(body => ({ status: response.status, body })))
      .then(res => {
        if (res.status === 200) {
          setAuthToken(res.body.token);
          window.localStorage.setItem('token', res.body.token);
        } else throw res;
      })
      .catch(err => handleError(err, triggerAlert))
      .finally(() => setIsLoading(false));
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
        <input className={styles.btn} disabled={isLoading} type="submit" value="Login" />
        <p className={styles.p}>
          Not Registered? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
