import { memo, SVGProps } from 'react';

const ButtonActRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 61 61' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_d_2_2717)'>
      <ellipse cx={30.0832} cy={30.2764} rx={30.0833} ry={30.122} fill='#DC7000' />
      <ellipse cx={30.0832} cy={30.2764} rx={30.0833} ry={30.122} stroke='#DC7000' strokeWidth={2} />
    </g>
    <path
      d='M21.3088 29.0213H36.1749L31.6248 23.5492C31.4121 23.2929 31.3097 22.9624 31.3403 22.6305C31.3708 22.2987 31.5318 21.9925 31.7878 21.7795C32.0438 21.5665 32.3738 21.464 32.7052 21.4946C33.0367 21.5252 33.3424 21.6864 33.5552 21.9427L39.8225 29.4731C39.8647 29.533 39.9024 29.596 39.9354 29.6614C39.9354 29.7242 39.9354 29.7618 40.0231 29.8246C40.0799 29.9685 40.1097 30.1217 40.1108 30.2764C40.1097 30.4311 40.0799 30.5843 40.0231 30.7282C40.0231 30.791 40.0231 30.8286 39.9354 30.8914C39.9024 30.9568 39.8647 31.0198 39.8225 31.0797L33.5552 38.6101C33.4373 38.7518 33.2897 38.8658 33.1229 38.9438C32.9561 39.0219 32.7742 39.0623 32.59 39.062C32.2971 39.0625 32.0133 38.9604 31.7878 38.7733C31.6609 38.6679 31.5559 38.5385 31.479 38.3925C31.4021 38.2465 31.3548 38.0867 31.3396 37.9223C31.3245 37.7579 31.3419 37.5922 31.3908 37.4345C31.4398 37.2769 31.5193 37.1305 31.6248 37.0036L36.1749 31.5315H21.3088C20.9763 31.5315 20.6575 31.3992 20.4224 31.1639C20.1873 30.9285 20.0553 30.6093 20.0553 30.2764C20.0553 29.9435 20.1873 29.6243 20.4224 29.3889C20.6575 29.1535 20.9763 29.0213 21.3088 29.0213Z'
      fill='white'
    />
    <defs>
      <filter
        id='filter0_d_2_2717'
        x={-45.0001}
        y={-30.8455}
        width={150.167}
        height={150.244}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={14} />
        <feGaussianBlur stdDeviation={22} />
        <feColorMatrix type='matrix' values='0 0 0 0 0.0561111 0 0 0 0 0.0777333 0 0 0 0 0.133333 0 0 0 0.08 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_2_2717' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_2_2717' result='shape' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(ButtonActRightIcon);
export { Memo as ButtonActRightIcon };
