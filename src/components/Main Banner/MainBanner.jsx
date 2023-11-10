import React from "react";
import styles from "./MainBanner.module.css";
import banner1 from "../../assets/Property 1=mb_1.png";

export default function MainBanner({ img, havePara, heading, para }) {
  return (
    <>
      <div className={styles.mainBanner}>
        <img src={img} alt="Main Banner" className={styles.bannerImage} />
        <div className={styles.mainBannerContent}>
          <h2>{heading}</h2>
          {havePara && <p>{para}</p>}
        </div>
      </div>
    </>
  );
}
