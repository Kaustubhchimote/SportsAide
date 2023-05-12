import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle2?: string;
    root?: string;
  };
  text?: {
    register?: ReactNode;
  };
}
/* @figmaId 1:419 */
export const Button: FC<Props> = memo(function Button(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle2 || ''} ${classes.rectangle2}`}></div>
      {props.text?.register != null ? props.text?.register : <div className={classes.register}>Register</div>}
    </div>
  );
});
