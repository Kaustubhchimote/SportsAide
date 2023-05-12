import { memo } from "react";
import type { FC } from "react";

import { Link } from "react-router-dom";
import resets from "../_resets.module.css";
import { Arrow2Icon } from "./Arrow2Icon";
import { CricketCuateIcon } from "./CricketCuateIcon";
import { Fire1Icon } from "./Fire1Icon";
import { Fire1Icon2 } from "./Fire1Icon2";
import { Fire1Icon3 } from "./Fire1Icon3";
import { Fire1Icon4 } from "./Fire1Icon4";
import { Group12Icon } from "./Group12Icon";
import { Group21Icon } from "./Group21Icon";
import { Group48Icon } from "./Group48Icon";
import { Group49Icon } from "./Group49Icon";
import { Group50Icon } from "./Group50Icon";
import { Group51Icon } from "./Group51Icon";
import { GroupIcon } from "./GroupIcon";
import { GroupIcon2 } from "./GroupIcon2";
import { GroupIcon3 } from "./GroupIcon3";
import classes from "./Home.module.css";
import { GoogleLogin } from "@react-oauth/google";

interface Props {
  className?: string;
}
/* @figmaId 0:4 */
export const Home: FC<Props> = memo(function Home(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.kThatWeProduceForOurClients}>SPORTAIDE</div>
      <div className={classes.sportingMadeEasy}>Sporting made easy</div>
      <div className={classes.aPlatformThatBringsTheNationTo}>
        <div className={classes.textBlock}>
          A platform that brings the nation together with sports
        </div>
        <div className={classes.textBlock2}>
          Gets updates about your favourate sport events, host or play in them .
          Enjoy! Bond! Play!
        </div>
      </div>
      <Link to="#">
        <div className={classes.rectangle2}></div>
        <div className={classes.registerNow}>Register Now</div>
        <div className={classes.auth}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </Link>
      <div className={classes.joy_stick1}></div>
      <div className={classes.selectSportsEventsAcrossTheCou}>
        Select sports events across the country
      </div>
      <div className={classes.aLLOVERINDIA}>ALL OVER INDIA</div>
      <div className={classes.beAnywhereInIndiaAndBeAbleToPa}>
        <div className={classes.textBlock3}>
          Be anywhere in India and be able to participate or host events near
          you.{" "}
        </div>
        <div className={classes.textBlock4}>ENJOY! PLAY! BOND!</div>
      </div>
      <div className={classes.group21}>
        <Group21Icon className={classes.icon} />
      </div>
      <div className={classes.rectangle4}></div>
      <div className={classes.db4d123c4b390965f684f22d4bf138}></div>
      <div className={classes.rectangle5}></div>
      <div className={classes.whatWeDoo}>What we doo</div>
      <div className={classes.accessToAllSportsEvents}>
        Access to all sports events.
      </div>
      <div className={classes.arrow1}></div>
      <div className={classes.group48}>
        <Group48Icon className={classes.icon2} />
      </div>
      <div className={classes.arrow2}>
        <Arrow2Icon className={classes.icon3} />
      </div>
      <div className={classes.personalisedAlerts}>Personalised alerts</div>
      <div className={classes.arrow3}></div>
      <div className={classes.group50}>
        <Group50Icon className={classes.icon4} />
      </div>
      <div className={classes.getExclusiveEventInfo}>
        <div className={classes.textBlock5}>Get exclusive event info.</div>
        <div className={classes.textBlock6}>
          <p></p>
        </div>
      </div>
      <div className={classes.arrow4}></div>
      <div className={classes.group51}>
        <Group51Icon className={classes.icon5} />
      </div>
      <div className={classes.rectangle21}></div>
      <div className={classes.group}>
        <GroupIcon className={classes.icon6} />
      </div>
      <div className={classes.group2}>
        <GroupIcon2 className={classes.icon7} />
      </div>
      <div className={classes.group3}>
        <GroupIcon3 className={classes.icon8} />
      </div>
      <div className={classes.rectangle22}></div>
      <div className={classes.sEEALL}>SEE ALL</div>
      <div className={classes.currentlyTrendingGames}>
        Currently Trending Games
      </div>
      <div className={classes.rectangle222}></div>
      <div className={classes.sEEALL2}>SEE ALL</div>
      <div className={classes.rectangle23}></div>
      <div className={classes.rectangle24}></div>
      <div className={classes.rectangle25}></div>
      <div className={classes.rectangle26}></div>
      <Link to="/cricket">
        <div className={classes.cricket}>Cricket</div>
        <div className={classes.fire1}>
          <Fire1Icon className={classes.icon9} />
        </div>
      </Link>
      <div className={classes.hockey}>Hockey</div>
      <div className={classes.fire12}>
        <Fire1Icon2 className={classes.icon10} />
      </div>
      <div className={classes.khoKho}>Kho-Kho</div>
      <div className={classes.fire13}>
        <Fire1Icon3 className={classes.icon11} />
      </div>
      <Link to="/football">
        <div className={classes.football}>Football</div>
        <div className={classes.fire14}>
          <Fire1Icon4 className={classes.icon12} />
        </div>
      </Link>
      <div className={classes.preScene61}></div>
      <div className={classes.ourRecentProjects}>Our Recent Projects</div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </div>
      <div className={classes.rectangle15}></div>
      <div className={classes.rectangle16}></div>
      <div className={classes.rectangle17}></div>
      <div className={classes.rectangle18}></div>
      <div className={classes.rectangle20}></div>
      <div className={classes.rectangle19}></div>
      <div className={classes.rectangle212}></div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </div>
      <div className={classes.zeuxPortfolioCareersContactUs}>
        <div className={classes.textBlock7}>Zeux</div>
        <div className={classes.textBlock8}>Portfolio</div>
        <div className={classes.textBlock9}>Careers</div>
        <div className={classes.textBlock10}>Contact us</div>
      </div>
      <div className={classes.Logo}>@Logo</div>
      <div className={classes.group12}>
        <Group12Icon className={classes.icon13} />
      </div>
      <div className={classes.aboutUs}>About us</div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT3}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </div>
      <div className={classes._90889097890}>+908 89097 890</div>
      <div className={classes.contactUs}>Contact us</div>
      <div className={classes.line1}></div>
      <div className={classes.copyright2022ProdesignerAllRig}>
        Copyright ® 2022 prodesigner All rights Rcerved
      </div>
      <div className={classes.lOGO}>SportAide</div>
      <div className={classes.lOGO2}>SportAide</div>
      <div className={classes.rectangle277}></div>
      <div className={classes.frame1}>
        <div className={classes.featured}>Home</div>
        <Link to="/events">
          <div className={classes.events}>Events</div>
        </Link>
        <div className={classes.community}>Community</div>
        <div className={classes.about}>About</div>
      </div>
      <div className={classes.rectangle1}></div>

      <Link to="/contact-us">
        <div className={classes.contactUs2}>Contact us</div>
      </Link>
      <div className={classes.rectangle27}></div>
      <div className={classes.rectangle28}></div>
      <div className={classes.cricketCuate}>
        <CricketCuateIcon className={classes.icon14} />
      </div>
      <div className={classes.group49}>
        <Group49Icon className={classes.icon15} />
      </div>
      <div className={classes.realTimeUpdates}>
        <div className={classes.textBlock11}>Real-time updates.</div>
        <div className={classes.textBlock12}>
          <p></p>
        </div>
      </div>
      <div className={classes.thisIsHowWeHelpYouFindAndParti}>
        This is how we help you find and participate in your favourite sport
        event
      </div>
    </div>
  );
});
