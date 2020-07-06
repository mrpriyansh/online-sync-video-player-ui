import React from 'react';
import styles from './ContactUs.module.css';

function ContactUs() {
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
        <div className={`${styles.fl_column} ${styles.div_rh}`}>
          <div>
            <span>Full Name</span>
            <br />
            <input type="text" className={styles.input}></input>
          </div>
          <div>
            <span>E-Mail</span>
            <br />
            <input type="email" className={styles.input}></input>
          </div>
          <div>
            <div>
              <span>Description</span>
              <br />
              <textarea
                placeholder="Describe the problem here"
                className={`${styles.txtbx} ${styles.input}`}
              ></textarea>
            </div>
            <div>
              <button className={styles.btn}>Report Bug</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
