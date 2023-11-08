import React from "react";
import styles from "./YellowBanner.module.css";

export default function YellowBanner({ havePara, p, heading }) {

  
  if (havePara) {
    return (
      <div className={styles.bannerContent}>
         <h2>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore. */}
          {p}
        </h2>
        <p className={styles.para}>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. */}
          {heading}
        </p>
      </div>
    );
  } else {
    return (
      <div className={styles.bannerContent}>
        <h2>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore. */}

          {heading}
        </h2>
        
      </div>
    );
  }
}
