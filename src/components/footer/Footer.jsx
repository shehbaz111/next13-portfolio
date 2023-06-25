import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Portfolio. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/facebook.png" width={20} height={20} className={styles.icon} alt="Facebook Account" />
        <Image src="/instagram.png" width={20} height={20} className={styles.icon} alt="Instagram" />
        <Image src="/twitter.png" width={20} height={20} className={styles.icon} alt="Twitter" />
        <Image src="/linkedin.png" width={20} height={20} className={styles.icon} alt="Linkedin" />
      </div>
    </div>
  );
};

export default Footer;
