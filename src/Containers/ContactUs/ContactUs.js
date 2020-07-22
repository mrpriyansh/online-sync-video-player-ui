import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './ContactUs.module.css';
import { triggerAlert } from '../../service/getAlert/getAlert';
import { apiUrl } from '../../service/config';
import handleError from '../../service/handleError';

function ContactUs() {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = data => {
    setIsLoading(true);
    console.log(data);
    fetch(`${apiUrl}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => response.json().then(body => ({ status: response.status, body })))
      .then(res => {
        if (res.status === 200) {
          triggerAlert({ icon: 'success', title: 'Thank You! We will reach you soon!' });
        } else throw res;
      })
      .catch(err => handleError(err, triggerAlert))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.div_header}>
        <h1 className={styles.header}>Ran into a bug, and still stuck?</h1>
        <h2 className={styles.header}>Send us a message!</h2>
      </div>
      <div className={styles.fl_row}>
        <div className={styles.div_lf}>
          <p>
            We are constantly updating the app. Please try refreshing the browser and clearing the
            cache.
            <br />
            If the issue still persists, please fill the form below
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={`${styles.fl_col} ${styles.div_rh}`}>
          <label>Full Name</label>
          {/* <br /> */}
          <input
            id="name"
            name="name"
            type="text"
            className={styles.input}
            ref={register({ required: true, pattern: /^[a-zA-Z ]+$/ })}
          />
          {errors.name && errors.name.type === 'required' && (
            <p className={styles.error}>
              <span className={styles.emoji} role="img" aria-label="error">
                ⚠️
              </span>
              This field is required
            </p>
          )}
          {errors.name && errors.name.type === 'pattern' && (
            <p className={styles.error}>
              <span className={styles.emoji} role="img" aria-label="error">
                ⚠️
              </span>
              Please input a valid Name
            </p>
          )}

          <br />
          <label>E-Mail</label>
          {/* <br /> */}
          <input
            id="email"
            name="email"
            className={styles.input}
            ref={register({
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          {errors.email && errors.email.type === 'required' && (
            <p className={styles.error}>
              <span className={styles.emoji} role="img" aria-label="error">
                ⚠️
              </span>
              This field is required
            </p>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <p className={styles.error}>
              <span className={styles.emoji} role="img" aria-label="error">
                ⚠️
              </span>
              Please input a valid E-Mail address
            </p>
          )}

          <br />
          <label>Description</label>
          {/* <br /> */}
          <textarea
            id="description"
            name="description"
            placeholder="Describe the problem here"
            className={`${styles.txtbx} ${styles.input}`}
            ref={register({ required: true })}
          />
          {errors.description && errors.description.type === 'required' && (
            <p className={styles.error}>
              <span className={styles.emoji} role="img" aria-label="error">
                ⚠️
              </span>
              This field is required
            </p>
          )}

          <br />
          <input type="submit" className={styles.btn} disabled={isLoading} value="Report Bug" />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
