import { memo } from "react";
import type { FC } from "react";

import { Link } from "react-router-dom";
import resets from "../_resets.module.css";
import classes from "./ContactUs.module.css";
import { Ellipse2Icon } from "./Ellipse2Icon";
import { Group12Icon } from "./Group12Icon";
import { Group12Icon2 } from "./Group12Icon2";
import { Phone1Icon } from "./Phone1Icon";

interface Props {
  className?: string;
}
/* @figmaId 2:3228 */
export const ContactUs: FC<Props> = memo(function ContactUs(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle123}></div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon} />
      </div>
      <div className={classes.rectangle21}></div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </div>
      <div className={classes.zeuxPortfolioCareersContactUs}>
        <div className={classes.textBlock}>Zeux</div>
        <div className={classes.textBlock2}>Portfolio</div>
        <div className={classes.textBlock3}>Careers</div>
        <div className={classes.textBlock4}>Contact us</div>
      </div>
      <div className={classes.Lorem}>@Lorem</div>
      <div className={classes.group12}>
        <Group12Icon className={classes.icon2} />
      </div>
      <div className={classes.aboutUs}>About us</div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </div>
      <div className={classes._90889097890}>+908 89097 890</div>
      <div className={classes.contactUs}>Contact us</div>
      <div className={classes.line1}></div>
      <div className={classes.copyright2021LoremAllRightsRce}>
        Copyright ® 2021 Lorem All rights Rcerved
      </div>
      <div className={classes.lOGO}>LOGO</div>
      <div className={classes.homeContactUs}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Home &gt; </span>
          <span className={classes.label2}>Contact us</span>
        </p>
      </div>
      <div className={classes._94444455556}>+94 4444 5555 6</div>
      <div className={classes.phone1}>
        <Phone1Icon className={classes.icon3} />
      </div>
      <div className={classes.group122}>
        <Group12Icon2 className={classes.icon4} />
      </div>
      <div className={classes.followUs}>Follow us</div>
      <div className={classes.line5}></div>
      <div className={classes.rectangle3}></div>
      <div className={classes.firstName}>First Name</div>
      <div className={classes.rectangle32}></div>
      <div className={classes.lastName}>Last Name</div>
      <div className={classes.rectangle33}></div>
      <div className={classes.emailAddress}>Email Address</div>
      <div className={classes.rectangle34}></div>
      <div className={classes.message}>Message</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.getInTouch}>Get in touch</div>
      <div className={classes.sayHello}>Say hello</div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT3}>
        Lorem Ipsum is simply dummy text of the printing .
      </div>
      <div className={classes.frame1}>
        <Link to="/">
          <div className={classes.home}>Home</div>
        </Link>
        <Link to="/events">
          <div className={classes.aboutUs2}>Events</div>
        </Link>
        <div className={classes.portfolio}>Portfolio</div>
        <div className={classes.news}>News</div>
      </div>
      {/* <Link to="contact-us">
        <div className={classes.rectangle1}></div>
        <div className={classes.contactUs2}>Contact us</div>
      </Link> */}
      <div className={classes.lOGO2}>LOGO</div>
    </div>
  );
});
