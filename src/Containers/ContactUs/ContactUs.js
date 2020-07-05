import React from 'react';
import styles from './ContactUs.module.css';

function ContactUs() {
  return (
    <div>
      <section className={styles.section_1}>
        <h1 className={styles.text_header}>Ran into a bug, and still stuck?</h1>
        <h2 className={styles.text_header}>Send us a message!</h2>
        <div className={`${styles.div_main} ${styles.fl_row}`}>
          <div className={styles.mrg}>
            {/* <h2 className={styles.tc}>Lines</h2> */}
            <p className={`${styles.text_1} ${styles.tc}`}>
              We are constantly updating the app. Please try refreshing the browser and clearing the
              cache.
              <br />
              If the issue still persists, please fill the form below
            </p>
          </div>
          <div className={`${styles.fl_column} ${styles.div_form}`}>
            <div className={`${styles.fl_row} ${styles.mrg}`}>
              <div>
                <span className={styles.text_1}>First Name</span>
                <br />
                <input type="text" className={styles.br}></input>
              </div>
              <div className={styles.mrg_lf}>
                <span className={styles.text_1}>Last Name</span>
                <br />
                <input type="text" className={styles.br}></input>
              </div>
            </div>
            <div className={styles.mrg}>
              <span className={styles.text_1}>E-Mail</span>
              <br />
              <input type="email" className={`${styles.br} ${styles.email_inp}`}></input>
            </div>
            <div className={styles.fl_column}>
              <div className={styles.mrg}>
                <span className={styles.text_1}>Description</span>
                <br />
                <textarea
                  placeholder="Describe the problem here"
                  className={`${styles.txtbx} ${styles.br}`}
                ></textarea>
              </div>
              <div>
                <button className={styles.btn}>Report Bug</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
