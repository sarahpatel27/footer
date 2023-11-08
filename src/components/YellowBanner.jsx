import React from "react";
import styles from "./YellowBanner.module.css";

export default function YellowBanner() {
  return (
    <div className={styles.bannerContent}>
       <h2>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore.
         </h2>
         <p className={styles.para}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
           minim veniam.
         </p>
       </div>
  )
}