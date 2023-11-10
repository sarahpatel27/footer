import React from "react";
import styles from "./YellowBanner.module.css";

export default function YellowBanner({ havePara, heading, para}) {

  
    return (
      <div className={styles.bannerContent}>
         <h2>
          {heading}
        </h2>
        {havePara && <p className={styles.para}>
          {para}
        </p>}
       
      </div>
    );

  }

