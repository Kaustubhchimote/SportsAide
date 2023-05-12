import { memo, SVGProps } from 'react';

const Fire1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_1_145)'>
      <path
        d='M21.8216 14.6371C21.5352 10.9087 19.7993 8.57219 18.2678 6.51038C16.8498 4.60159 15.625 2.95325 15.625 0.521705C15.625 0.326392 15.5156 0.147877 15.3422 0.0583748C15.1682 -0.0316642 14.9592 -0.0169181 14.801 0.0980233C12.501 1.74382 10.582 4.5177 9.91162 7.16438C9.44624 9.00701 9.38467 11.0785 9.37603 12.4466C7.252 11.9929 6.77085 8.8158 6.76577 8.78118C6.74185 8.61638 6.64116 8.47297 6.49468 8.39465C6.34668 8.31736 6.17271 8.31174 6.02266 8.38601C5.91128 8.43992 3.28877 9.77244 3.13618 15.0928C3.12549 15.2698 3.125 15.4473 3.125 15.6248C3.125 20.7936 7.33081 24.9992 12.5 24.9992C12.5071 24.9997 12.5147 25.0007 12.5208 24.9992C12.5229 24.9992 12.5249 24.9992 12.5274 24.9992C17.6839 24.9844 21.875 20.7845 21.875 15.6248C21.875 15.3649 21.8216 14.6371 21.8216 14.6371ZM12.5 23.9576C10.7768 23.9576 9.375 22.4644 9.375 20.6289C9.375 20.5663 9.37451 20.5032 9.37905 20.426C9.3999 19.6519 9.54692 19.1235 9.70815 18.772C10.0103 19.421 10.5504 20.0176 11.4278 20.0176C11.7157 20.0176 11.9487 19.7846 11.9487 19.4968C11.9487 18.7553 11.964 17.8998 12.1486 17.1277C12.3129 16.4431 12.7055 15.7148 13.203 15.131C13.4242 15.8888 13.8556 16.5021 14.2767 17.1008C14.8794 17.9572 15.5025 18.8427 15.6119 20.3527C15.6185 20.4422 15.6251 20.5323 15.6251 20.6289C15.625 22.4643 14.2232 23.9576 12.5 23.9576Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_1_145'>
        <rect width={25} height={25} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(Fire1Icon);
export { Memo as Fire1Icon };
