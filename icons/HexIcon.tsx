import IconProps from './IconProps';

const HexIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      height='62'
      width='70'
      viewBox='0 0 70 62'
      fill='currentColor'
    >
      <path d='M 0 31 L 18 0 L 52 0 L 70 31 L 52 62 L 18 62 Z' />
    </svg>
  );
};
export default HexIcon;
