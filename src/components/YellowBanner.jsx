import React from "react";
import styles from "./YellowBanner.module.css";
import banner from "../assets/yellow_banner 2.png";

// export default function YellowBanner() {
//   return (
//     <div
//       className={styles.yellowBanner}
//       // style={{backgroundImage:`url(${banner}`}
//     >
//       <img src={banner} alt="banner" width="100%" height="auto" />
//       <div className={styles.bannerContent}>
//         <h2>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore.
//         </h2>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam.
//         </p>
//       </div>
//     </div>
//   );
// }

export default function YellowBanner() {
  return (
    <div className={styles.bannerContent}>
       <h2>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore.
         </h2>
         <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
           minim veniam.
         </p>
       </div>
  )
}