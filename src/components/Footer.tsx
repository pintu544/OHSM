import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.footerComponentscolumn}>
          <div className={styles.footerComponentslinkfooter}>
            <div className={styles.categories}>Categories</div>
          </div>
          <div className={styles.links}>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>User Interface</div>
            </div>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>User Experience</div>
            </div>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Digital Media</div>
            </div>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Lifestyle</div>
            </div>
          </div>
        </div>
        <div className={styles.footerComponentscolumn}>
          <div className={styles.footerComponentslinkfooter}>
            <div className={styles.categories}>Product</div>
          </div>
          <div className={styles.links}>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Pricing</div>
            </div>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Overview</div>
            </div>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Browse</div>
            </div>
            <div className={styles.footerComponentslinkfooter9}>
              <div className={styles.userInterface}>Accessibility</div>
              <div className={styles.badge}>
                <div className={styles.textContainer}>
                  <div className={styles.userInterface}>BETA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerComponentscolumn}>
          <div className={styles.footerComponentslinkfooter}>
            <div className={styles.categories}>Solutions</div>
          </div>
          <div className={styles.links}>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Brainstorming</div>
            </div>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Ideation</div>
            </div>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Wireframing</div>
            </div>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Research</div>
            </div>
          </div>
        </div>
        <div className={styles.footerComponentscolumn}>
          <div className={styles.footerComponentslinkfooter}>
            <div className={styles.categories}>Resources</div>
          </div>
          <div className={styles.links}>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Help Center</div>
            </div>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Blog</div>
            </div>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Tutorials</div>
            </div>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>FAQs</div>
            </div>
          </div>
        </div>
        <div className={styles.footerComponentscolumn}>
          <div className={styles.footerComponentslinkfooter}>
            <div className={styles.categories}>Support</div>
          </div>
          <div className={styles.links}>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Contact Us</div>
            </div>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Developers</div>
            </div>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Documentation</div>
            </div>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Integrations</div>
            </div>
          </div>
        </div>
        <div className={styles.footerComponentscolumn}>
          <div className={styles.footerComponentslinkfooter}>
            <div className={styles.categories}>Company</div>
          </div>
          <div className={styles.links}>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>About</div>
            </div>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Press</div>
            </div>
            <div className={styles.footerComponentslinkfooter}>
              <div className={styles.userInterface}>Events</div>
            </div>
            <div className={styles.footerComponentslinkfooter9}>
              <div className={styles.userInterface}>Request Demo</div>
              <img
                className={styles.iconJamIconsOutlineL}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.userInterface}>OHSM @ 2023</div>
        <div className={styles.footerComponentsverticalMen}>
          <div className={styles.footerComponentslinkfooter30}>
            <div className={styles.userInterface}>Terms of Service</div>
          </div>
          <div className={styles.footerComponentslinkfooter30}>
            <div className={styles.userInterface}>Privacy Policy</div>
          </div>
          <div className={styles.footerComponentslinkfooter30}>
            <div className={styles.userInterface}>Manage Cookies</div>
          </div>
        </div>
        <div className={styles.footerComponentssocialIcons}>
          <img
            className={styles.iconJamIconsOutlineL}
            alt=""
            src="/icon--jamicons--outline--logos--youtube.svg"
          />
          <img
            className={styles.iconJamIconsOutlineL}
            alt=""
            src="/icon--jamicons--outline--logos--facebook.svg"
          />
          <img
            className={styles.iconJamIconsOutlineL}
            alt=""
            src="/icon--jamicons--outline--logos--twitter.svg"
          />
          <img
            className={styles.iconJamIconsOutlineL}
            alt=""
            src="/icon--jamicons--outline--logos--instagram.svg"
          />
          <img
            className={styles.iconJamIconsOutlineL}
            alt=""
            src="/icon--jamicons--outline--logos--linkedin.svg"
          />
        </div>
        <div className={styles.appDownload}>
          <div className={styles.button}>
            <img
              className={styles.appStoreFilled}
              alt=""
              src="/app-store--filled.svg"
            />
          </div>
          <div className={styles.button}>
            <div className={styles.googlePlay}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
              <div className={styles.getItOn}>GET IT ON</div>
              <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
              <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
              <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
              <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
              <img className={styles.vectorIcon6} alt="" src="/vector6.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
