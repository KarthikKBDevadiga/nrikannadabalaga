import IconProps from './IconProps';

const RupeeIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      fill='currentColor'
    >
      <rect d='M0 0h24v24H0V0z' fill='none' height='24' width='24' />
      <path d='M 13.66 7 C 13.1 5.82 11.9 5 10.5 5 L 6 5 V 3 h 12 v 2 l -3.26 0 c 0.48 0.58 0.84 1.26 1.05 2 L 18 7 v 2 l -2.02 0 c -0.25 2.8 -2.61 5 -5.48 5 H 9.77 l 6.73 7 h -2.77 L 7 14 v -2 h 3.5 c 1.76 0 3.22 -1.3 3.46 -3 L 6 9 V 7 L 13.66 7 Z' />
    </svg>
  );
};
export default RupeeIcon;
