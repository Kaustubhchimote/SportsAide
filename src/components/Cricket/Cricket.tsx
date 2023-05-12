import { memo } from "react";
import type { FC } from "react";

import { Link } from "react-router-dom";
import resets from "../_resets.module.css";
import classes from "./Cricket.module.css";
import { Ellipse2Icon } from "./Ellipse2Icon";
import { Group12Icon } from "./Group12Icon";
import { Group12Icon2 } from "./Group12Icon2";
import { GroupIcon } from "./GroupIcon";

interface Props {
  className?: string;
}
/* @figmaId 2:2727 */
export const Cricket: FC<Props> = memo(function Cricket(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle5}></div>
      <div className={classes.frame1}>
        <Link to="/">
          <div className={classes.home}>Home</div>
        </Link>
        <Link to="/events">
          <div className={classes.aboutUs}>Events</div>
        </Link>
        <div className={classes.portfolio}>Portfolio</div>
        <div className={classes.news}>News</div>
      </div>
      <Link to="contact-us">
        <div className={classes.rectangle1}></div>
        <div className={classes.contactUs}>Contact us</div>
      </Link>
      <div className={classes.rectangle21}></div>
      <div className={classes.asset21}></div>
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
      <div className={classes.Zeux}>@Zeux</div>
      <div className={classes.group12}>
        <Group12Icon className={classes.icon} />
      </div>
      <div className={classes.aboutUs2}>About us</div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </div>
      <div className={classes._90889097890}>+908 89097 890</div>
      <div className={classes.contactUs2}>Contact us</div>
      <div className={classes.line1}></div>
      <div className={classes.copyright2021KodeXAllRightsRce}>
        Copyright ® 2021 KodeX All rights Rcerved
      </div>
      <div className={classes.loremIpsum}>Lorem Ipsum</div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT3}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </div>
      <div className={classes.rectangle18}></div>
      <div className={classes.stayInTheLoop}>Stay in the loop</div>
      <div className={classes.subscribeToReceiveTheLatestNew}>
        <div className={classes.textBlock5}>
          Subscribe to receive the latest news and updates about TDA.
        </div>
        <div className={classes.textBlock6}>We promise not to spam you! </div>
      </div>
      <div className={classes.rectangle19}></div>
      <div className={classes.rectangle20}></div>
      <div className={classes.continue}>Continue</div>
      <div className={classes.enterEmailAddress}>Enter email address</div>
      <div className={classes.rectangle212}></div>
      <div className={classes.lOGO}>LOGO</div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT4}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </div>
      <div className={classes.zeuxPortfolioCareersContactUs2}>
        <div className={classes.textBlock7}>Zeux</div>
        <div className={classes.textBlock8}>Portfolio</div>
        <div className={classes.textBlock9}>Careers</div>
        <div className={classes.textBlock10}>Contact us</div>
      </div>
      <div className={classes.Lorem}>@Lorem</div>
      <div className={classes.group122}>
        <Group12Icon2 className={classes.icon2} />
      </div>
      <div className={classes.aboutUs3}>About us</div>
      <div className={classes.loremIpsumIsSimplyDummyTextOfT5}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </div>
      <div className={classes._908890978902}>+908 89097 890</div>
      <div className={classes.contactUs3}>Contact us</div>
      <div className={classes.line12}></div>
      <div className={classes.copyright2022ProdesignerAllRig}>
        Copyright ® 2022 prodesigner All rights Rcerved
      </div>
      <div className={classes.wannaJoin}>Wanna Join?</div>
      <div className={classes.whyWaitAndJustWatchWhenYouCanJ}>
        Why wait and just watch when you can join, engage and participate and
        also get rewarded.{" "}
      </div>
      <div className={classes.rectangle182}></div>
      <div className={classes.stayInTheLoop2}>Stay in the loop</div>
      <div className={classes.subscribeToReceiveTheLatestNew2}>
        <div className={classes.textBlock11}>
          Subscribe to receive the latest news and updates about SportsAide.
        </div>
        <div className={classes.textBlock12}>We promise not to spam you! </div>
      </div>
      <div className={classes.rectangle192}></div>
      <div className={classes.rectangle202}></div>
      <div className={classes.continue2}>Continue</div>
      <div className={classes.enterEmailAddress2}>Enter email address</div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon3} />
      </div>
      <div className={classes.rectangle6}></div>
      <div className={classes.welcomeToTheAllYouNeedToKnowAb}>
        Welcome to the all you need to know about cricket!
      </div>
      <div className={classes.rectangle2}></div>
      <div className={classes.joinNow}>Join Now</div>
      <div className={classes.arrow6}></div>
      <div className={classes.group}>
        <GroupIcon className={classes.icon4} />
      </div>
      <div className={classes.whyWorkWithUs}>Why work with us</div>
      <div className={classes.rectangle7}></div>
      <div className={classes.donTWorryAboutBookingAGroundFr}>
        Don’t worry about booking a ground from a tournament abd negotiate with
        the stadium authorities. We will help you to connect directly to
        tournament happening around you{" "}
      </div>
      <div className={classes.forgetAboutBookingAGround}>
        Forget About Booking A Ground
      </div>
      <div className={classes.rectangle72}></div>
      <div className={classes.youCanWatchAndPlayTournamentsY}>
        You can watch and play tournaments you didn’t even know about. Let that
        be a tennis ball tournaments or just practice match you can join in and
        enjoy{" "}
      </div>
      <div className={classes.hugeNetwork}>Huge Network</div>
      <div className={classes.rectangle73}></div>
      <div className={classes.showcaseYourTalentInTheNearest}>
        Showcase your talent in the nearest tournament and start to make a
        difference in your sport career. Be the change you want{" "}
      </div>
      <div className={classes.talentSearch}>Talent Search</div>
      <div className={classes.rectangle24}></div>
      <div className={classes.ourVeryOwnCricketTournamentInW}>
        Our very own cricket tournament in which 10 teams can participate. They
        would be divided into 2 groups of 5. The two table toppers of both
        groups will then battle out for the WIN.
      </div>
      <div className={classes.cricketChampionship}>Cricket Championship</div>
      <div className={classes.rectangle25}></div>
      <div className={classes.partneredTeams}>Partnered Teams</div>
      <div className={classes.rectangle26}></div>
      <div className={classes.yetmanYabbies}>Yetman Yabbies</div>
      <div className={classes.first}>First</div>
      <div className={classes.bill1}></div>
      <div className={classes.rectangle272}></div>
      <div className={classes.cricketFlames}>Cricket Flames</div>
      <div className={classes.second}>Second</div>
      <div className={classes.beverly1}></div>
      <div className={classes.rectangle282}></div>
      <div className={classes.cricketLions}>Cricket Lions</div>
      <div className={classes.third}>Third</div>
      <div className={classes.claudia1}></div>
      <div className={classes.rectangle29}></div>
      <div className={classes.manStallions}>Man Stallions</div>
      <div className={classes.fourth}>Fourth</div>
      <div className={classes.avatar1}></div>
      <div className={classes.lOGO2}>SportAide</div>
    </div>
  );
});
