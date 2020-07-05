import React from 'react';
import styles from './Footer.module.css';

const Footer = props => (
  <div className={styles.footer}>
    <div className={styles.container}>
      {/* <div className={styles.row}>
        <div className={styles.column}>
          <h4>AOISJDOIAJSDO</h4>
          <ul className={styles.list}>
            <li>474015</li>
            <li>Atal bihari vajpayee</li>
            <li>Morena link road</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>AOISJDOIAJSDO</h4>
          <ul className={styles.list}>
            <li>474015</li>
            <li>Atal bihari vajpayee</li>
            <li>Morena link road</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>AOISJDOIAJSDO</h4>
          <ul className={styles.list}>
            <li>474015</li>
            <li>Atal bihari vajpayee</li>
            <li>Morena link road</li>
          </ul>
        </div>
      </div>
      <hr></hr> */}
      <div className={styles.bottom}>
        &copy;{new Date().getFullYear()} DEV-PROJECT | All Rights Reserved | Terms of Service |
        Privacy
      </div>
    </div>
  </div>
);

export default Footer;
