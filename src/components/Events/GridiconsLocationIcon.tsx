import { memo, SVGProps } from 'react';

const GridiconsLocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19 9C19 8.08075 18.8189 7.1705 18.4672 6.32122C18.1154 5.47194 17.5998 4.70026 16.9497 4.05025C16.2997 3.40024 15.5281 2.88463 14.6788 2.53284C13.8295 2.18106 12.9193 2 12 2C11.0807 2 10.1705 2.18106 9.32122 2.53284C8.47194 2.88463 7.70026 3.40024 7.05025 4.05025C6.40024 4.70026 5.88463 5.47194 5.53284 6.32122C5.18106 7.1705 5 8.08075 5 9C5 10.387 5.41 11.677 6.105 12.765H6.097C8.457 16.46 12 22 12 22L17.903 12.765H17.896C18.6164 11.6414 18.9995 10.3347 19 9V9ZM12 12C11.2044 12 10.4413 11.6839 9.87868 11.1213C9.31607 10.5587 9 9.79565 9 9C9 8.20435 9.31607 7.44129 9.87868 6.87868C10.4413 6.31607 11.2044 6 12 6C12.7956 6 13.5587 6.31607 14.1213 6.87868C14.6839 7.44129 15 8.20435 15 9C15 9.79565 14.6839 10.5587 14.1213 11.1213C13.5587 11.6839 12.7956 12 12 12Z'
      fill='#DC7000'
    />
  </svg>
);

const Memo = memo(GridiconsLocationIcon);
export { Memo as GridiconsLocationIcon };
