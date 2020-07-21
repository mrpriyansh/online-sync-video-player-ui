import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './ContactUs.module.css';

function ContactUs() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
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
            id="fullName"
            name="fullName"
            type="text"
            className={styles.input}
            ref={register({ required: true, pattern: /^[a-zA-Z ]+$/ })}
          />
          {errors.fullName && errors.fullName.type === 'required' && (
            <p className={styles.error}>
              <span className={styles.emoji} role="img" aria-label="error">
                ⚠️
              </span>
              This field is required
            </p>
          )}
          {errors.fullName && errors.fullName.type === 'pattern' && (
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
            id="eMail"
            name="eMail"
            className={styles.input}
            ref={register({
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          {errors.eMail && errors.eMail.type === 'required' && (
            <p className={styles.error}>
              <span className={styles.emoji} role="img" aria-label="error">
                ⚠️
              </span>
              This field is required
            </p>
          )}
          {errors.eMail && errors.eMail.type === 'pattern' && (
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
          <input type="submit" className={styles.btn} value="Report Bug" />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
