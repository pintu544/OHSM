import { FunctionComponent } from "react";
import styles from "./FormContainer1.module.css";

const FormContainer1: FunctionComponent = () => {
  return (
    <div className={styles.footerComponentscolumn}>
      <div className={styles.footerComponentslinkfooter}>
        <div className={styles.company}>Company</div>
      </div>
      <div className={styles.links}>
        <div className={styles.footerComponentslinkfooter}>
          <div className={styles.about}>About</div>
        </div>
        <div className={styles.footerComponentslinkfooter}>
          <div className={styles.about}>Press</div>
        </div>
        <div className={styles.footerComponentslinkfooter}>
          <div className={styles.about}>Events</div>
        </div>
        <div className={styles.footerComponentslinkfooter4}>
          <div className={styles.about}>Request Demo</div>
          <img
            className={styles.iconJamIconsOutlineL}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;
