import React from "react";
import footer from "../assets/footer_background 2.png";
import styles from "./Footer.module.css";
import footer_logo from "../assets/logo_footer.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <img src={footer} alt="banner" className={styles.backgroundImage} />
      <div className={styles.footerContent}>
        <img src={footer_logo} alt="footer-img" className={styles.logo} />
        <p>All necessary footer info goes here...</p>
      </div>
    </div>
  );
}
