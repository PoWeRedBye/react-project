import React from 'react';

import styles from './homePage.module.scss';
import { Footer } from "src/components/footer";

export class HomePage extends React.Component {
  // RENDER

  render() {
    return (
      <div className={styles.mainDiv}>
        <div className={styles.items}>
          <img src='http://localhost:3030/file/konicaminoltabanner.png' className={styles.itemsImg}/>
          <div className={styles.itemsText}>Konica Minolta Business Solution</div>
        </div>
        <div className={styles.items}>
          <img src='http://localhost:3030/file/bwprinters.jpg' className={styles.itemsImg}/>
          <div className={styles.itemsText}>Office Printers Solutions</div>
        </div>
        <div className={styles.items}>Home page</div>
        <Footer/>
      </div>
    );
  }
}
