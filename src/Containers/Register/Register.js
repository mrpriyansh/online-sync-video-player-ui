/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styles from '../Form.module.css';
import { apiUrl } from '../../service/config';
import handleError from '../../service/handleError';
import { triggerAlert } from '../../service/getAlert/getAlert';
import { useAuth } from '../../service/hooks/Auth';

const Register = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const { setAuthToken } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = data => {
    setIsLoading(true);
    fetch(`${apiUrl}/register`, {
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
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.h2}>Register</h2>
        <input
          className={styles.input}
          id="name"
          name="name"
          type="text"
          placeholder="Full Name"
          ref={register({ required: true, minLength: 3 })}
        />
        {errors.name && errors.name.type === 'minLength' && (
          <p className={styles.p_error}>⚠️Your name is too short</p>
        )}
        {errors.name && errors.name.type === 'required' && (
          <p className={styles.p_error}>⚠️This field is required</p>
        )}
        <br />
        <input
          className={styles.input}
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          ref={register({ required: true })}
        />
        {errors.email && errors.email.type === 'required' && (
          <p className={styles.p_error}>⚠️This field is required</p>
        )}
        <br />
        <input
          className={styles.input}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          ref={register({ required: true, minLength: 8 })}
        />
        {errors.password && errors.password.type === 'minLength' && (
          <p className={styles.p_error}>⚠️Minimum 8 characters required</p>
        )}
        {errors.password && errors.password.type === 'required' && (
          <p className={styles.p_error}>⚠️This field is required</p>
        )}
        <br />
        <input
          className={styles.input}
          id="confirmpassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          ref={register({
            validate: value => value === password.current || '⚠️The passwords do not match',
          })}
        />
        {errors.confirmPassword && (
          <p className={styles.p_error}>{errors.confirmPassword.message}</p>
        )}
        <br />
        <input className={styles.btn} disabled={isLoading} type="submit" value="Register" />
        <p className={styles.p}>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
