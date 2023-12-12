import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <b className={styles.ohsm}>OHSM</b>
      </div>
      <div className={styles.buttonsGroup}>
        <div className={styles.menuItem}>
          <div className={styles.solutions}>Solutions</div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.solutions}>Company</div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.solutions}>Pricing</div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.solutions}>Resources</div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.solutions}>Contact Us</div>
        </div>
      </div>
      <div className={styles.buttonsGroup1}>
        <div className={styles.button}>
          <div className={styles.textContainer}>
            <div className={styles.solutions}>Log In</div>
          </div>
        </div>
        <div className={styles.button1}>
          <div className={styles.textContainer}>
            <div className={styles.solutions}>Request a demo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
