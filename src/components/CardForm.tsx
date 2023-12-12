import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardForm.module.css";

type CardFormType = {
  starter?: string;
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  text6?: string;
  text7?: string;
  text8?: string;
  startAFree14DayTrial?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const CardForm: FunctionComponent<CardFormType> = ({
  starter,
  text,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  startAFree14DayTrial,
  propWidth,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.duoBasic}>
      <div className={styles.frameParent}>
        <div className={styles.starterParent}>
          <div className={styles.starter}>{starter}</div>
          <div className={styles.list}>
            <div className={styles.listItemWith}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--check.svg"
              />
              <div className={styles.text}>{text}</div>
            </div>
            <div className={styles.listItemWith}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--check.svg"
              />
              <div className={styles.text}>{text1}</div>
            </div>
            <div className={styles.listItemWith}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--check.svg"
              />
              <div className={styles.text2}>{text2}</div>
            </div>
            <div className={styles.listItemWith}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--check.svg"
              />
              <div className={styles.text}>{text3}</div>
            </div>
            <div className={styles.listItemWith}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--check.svg"
              />
              <div className={styles.text}>{text4}</div>
            </div>
            <div className={styles.listItemWith}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--check.svg"
              />
              <div className={styles.text}>{text5}</div>
            </div>
            <div className={styles.listItemWith}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--check.svg"
              />
              <div className={styles.text}>{text6}</div>
            </div>
            <div className={styles.listItemWith}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--check.svg"
              />
              <div className={styles.text}>{text7}</div>
            </div>
            <div className={styles.listItemWith8}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--check.svg"
              />
              <div className={styles.text8}>{text8}</div>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.button1} style={buttonStyle}>
            <div className={styles.textContainer}>
              <div className={styles.startAFree}>{startAFree14DayTrial}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForm;
