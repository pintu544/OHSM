import { FunctionComponent } from "react";
import CardForm from "./CardForm";
import styles from "./FormContainer.module.css";

const FormContainer: FunctionComponent = () => {
  return (
    <div className={styles.plans}>
      <div className={styles.frameParent}>
        <div className={styles.chooseYourPlanParent}>
          <div className={styles.chooseYourPlanContainer}>
            <span>{`Choose Your `}</span>
            <span className={styles.plan}>Plan</span>
          </div>
          <div className={styles.switchOrCancel}>
            Switch or cancel* anytime.
          </div>
        </div>
        <div className={styles.plans1}>
          <div className={styles.duoBasicParent}>
            <div className={styles.duoBasic}>
              <div className={styles.duoBasicInner}>
                <div className={styles.featureParent}>
                  <div className={styles.feature}>Feature</div>
                  <div className={styles.list}>
                    <div className={styles.listItemWith}>
                      <div className={styles.text}>Ideal for</div>
                    </div>
                    <div className={styles.listItemWith}>
                      <div className={styles.text}>Features</div>
                    </div>
                    <div className={styles.listItemWith2}>
                      <div className={styles.text2}>Number of properties</div>
                    </div>
                    <div className={styles.listItemWith2}>
                      <div className={styles.text2}>
                        Channel management channels
                      </div>
                    </div>
                    <div className={styles.listItemWith2}>
                      <div className={styles.text2}>
                        Booking engine (customizable)
                      </div>
                    </div>
                    <div className={styles.listItemWith}>
                      <div className={styles.text}>API access</div>
                    </div>
                    <div className={styles.listItemWith2}>
                      <div className={styles.text2}>
                        Dedicated account manager
                      </div>
                    </div>
                    <div className={styles.listItemWith2}>
                      <div className={styles.text2}>Priority support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CardForm
              starter="Starter"
              text="Small businesses"
              text1="Basic"
              text2="1"
              text3="Up to 10"
              text4="No"
              text5="No"
              text6="No"
              text7="No"
              text8="Starting at 19 points per month"
              startAFree14DayTrial="Start a Free 14-day trial"
            />
            <CardForm
              starter="Pro"
              text="Growing businesses"
              text1="Advanced"
              text2="Up to 10"
              text3="Up to 100"
              text4="Yes"
              text5="Yes"
              text6="No"
              text7="Yes"
              text8="Starting at 49 points per month"
              startAFree14DayTrial="Talk to sales"
              propWidth="233px"
            />
            <CardForm
              starter="Flex"
              text="Large businesses"
              text1="Custom"
              text2="Unlimited"
              text3="All channels"
              text4="Yes"
              text5="Yes"
              text6="Yes"
              text7="Yes"
              text8="Starting at 99 points per month"
              startAFree14DayTrial="Talk to sales"
              propWidth="233px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
