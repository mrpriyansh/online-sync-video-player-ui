import React from 'react';
import styles from './Footer.module.css';

const Footer = props => (
  <div className={styles.footer}>
    &copy;{new Date().getFullYear()} DEV-PROJECT | All Rights Reserved | Terms of Service | Privacy
  </div>
);

export default Footer;
