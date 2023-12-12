import { FunctionComponent } from "react";
import Header from "../components/Header";
import FormContainer from "../components/FormContainer";
import Footer from "../components/Footer";
import styles from "./Pricing.module.css";

const Pricing: FunctionComponent = () => {
  return (
    <div className={styles.pricing}>
      <Header />
      <div className={styles.section}>
        <div className={styles.sectionText}>
          <div className={styles.top}>
            <b className={styles.caption}>Caption</b>
            <div className={styles.mainHeadline}>
              Building apps just got easier
            </div>
            <div className={styles.secondaryHeadline}>Expanding services</div>
          </div>
          <div className={styles.paragraph}>
            Ac urna elementum purus vulputate tincidunt. Quam maecenas feugiat
            congue orci, eget tellus pellentesque aliquet. Felis fringilla morbi
            dui ac consequat risus pharetra odio pulvinar. Id pellentesque in
            tortor nec nulla cras sapien. Adipiscing nisi tellus quisque aliquet
            sit risus elementum scelerisque.
          </div>
          <div className={styles.buttonsGroup}>
            <div className={styles.button}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className={styles.textContainer}>
                <b className={styles.buttonText}>Get Started</b>
              </div>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright1.svg"
              />
            </div>
            <div className={styles.button2}>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--plus1.svg"
              />
              <div className={styles.textContainer1}>
                <div className={styles.buttonText1}>Button Text</div>
              </div>
              <img
                className={styles.iconJamIconsOutlineL3}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright2.svg"
              />
            </div>
            <div className={styles.button3}>
              <img
                className={styles.iconJamIconsOutlineL4}
                alt=""
                src="/icon--jamicons--outline--logos--plus1.svg"
              />
              <div className={styles.textContainer2}>
                <div className={styles.buttonText1}>Button Text</div>
              </div>
              <img
                className={styles.iconJamIconsOutlineL5}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright2.svg"
              />
              <div className={styles.badge}>
                <div className={styles.text}>9</div>
              </div>
            </div>
          </div>
        </div>
        <FormContainer />
        <div className={styles.faqs}>
          <div className={styles.frequentlyAskedQuestions}>
            Frequently Asked Questions
          </div>
          <div className={styles.questionParent}>
            <div className={styles.question}>
              <div className={styles.div}>+</div>
              <div className={styles.whatIsOne}>
                What is ONE STOP Hospitality Management Solution?
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.div}>+</div>
              <div className={styles.whatIsOne}>
                What are the benefits of using ONE STOP?
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.div}>+</div>
              <div className={styles.whatIsOne}>
                Is ONE STOP right for my property?
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.div}>+</div>
              <div className={styles.whatIsOne}>
                What features does ONE STOP offer?
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.div}>+</div>
              <div className={styles.whatIsOne}>
                How much does ONE STOP cost?
              </div>
            </div>
            <div className={styles.question}>
              <div className={styles.div}>+</div>
              <div className={styles.whatIsOne}>
                What kind of support does ONE STOP offer?
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
