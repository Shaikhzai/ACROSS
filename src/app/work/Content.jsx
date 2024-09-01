// components/StickySection.js
import React from 'react';
import styles from './style2.module.css';

const StickySection = () => {
  return (
    <div>
      <div className={styles.main1}></div>

      <div>
        <section className={`${styles.sticky} ${styles.stickyTop}`}>
          <h1 className={styles.title}>This sticky is position top</h1>
        </section>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <section className={`${styles.sticky} ${styles.stickyBottom}`}>
          <h1 className={styles.title}>This sticky is position bottom</h1>
        </section>
      </div>

      <div className={styles.main2}></div>
    </div>
  );
};

export default StickySection;
