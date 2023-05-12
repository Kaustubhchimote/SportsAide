import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button } from './Button/Button';
import classes from './Signup.module.css';
import { SoccerRafikiIcon } from './SoccerRafikiIcon';

interface Props {
  className?: string;
}
/* @figmaId 2:3411 */
export const Signup: FC<Props> = memo(function Signup(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.signupA}>
        <div className={classes.rectangle}></div>
        <div className={classes.signUpForAFreeAccount}>Sign up for a free account</div>
        <Button
          className={classes.button}
          classes={{ rectangle2: classes.rectangle2 }}
          text={{
            register: <div className={classes.register}>Register</div>,
          }}
        />
        <div className={classes.rectangle22}></div>
        <div className={classes.firstName}>First name</div>
        <div className={classes.rectangle21}></div>
        <div className={classes.lastName}>Last name</div>
        <div className={classes.rectangle222}></div>
        <div className={classes.emailAddress}>Email address</div>
        <div className={classes.rectangle23}></div>
        <div className={classes.createPassword}>Create password</div>
        <div className={classes.soccerRafiki}>
          <SoccerRafikiIcon className={classes.icon} />
        </div>
      </div>
    </div>
  );
});
