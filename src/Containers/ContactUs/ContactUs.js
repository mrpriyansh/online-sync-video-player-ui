import React from 'react';
import styles from './ContactUs.module.css';

function ContactUs() {
  return (
    <div>
      <section className={styles.section_1}>
        <h1 className={styles.text_header}>How can we help?</h1>
        <h2 className={styles.text_header}>Send us a message!</h2>
        <div className={`${styles.div_main} ${styles.fl_row}`}>
          <div className={styles.div_lines}>
            <h2 className={styles.tc}>Lines</h2>
            <p>
              Do nisi adipisicing ut dolore cupidatat nulla nostrud tempor sunt est ad aliqua duis
              duis sint dolor et nulla nulla.
            </p>
          </div>
          <div className={`${styles.fl_column} ${styles.div_form}`}>
            <div className={`${styles.fl_row} ${styles.mrg}`}>
              <div>
                <span>First Name</span>
                <br />
                <input type="text" className={styles.br}></input>
              </div>
              <div className={styles.mrg_lf}>
                <span>Last Name</span>
                <br />
                <input type="text" className={styles.br}></input>
              </div>
            </div>
            <div className={styles.mrg}>
              <span>E-Mail</span>
              <br />
              <input type="email" className={styles.br}></input>
            </div>
            <div className={`${styles.fl_column} ${styles.mrg}`}>
              <div className={styles.mrg}>
                <span>Message</span>
                <br />
                <textarea className={`${styles.txtbx} ${styles.br}`}>
                  Type your message here
                </textarea>
              </div>
              <div>
                <button className={styles.btn}>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
