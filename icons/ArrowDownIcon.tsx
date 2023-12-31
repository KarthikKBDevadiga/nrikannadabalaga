import IconProps from './IconProps';

const ArrowDownIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
      height='48'
      width='48'
      fill='currentColor'
    >
      <path d='M24 39.4q-.25 0-.525-.1t-.525-.35l-13.9-13.9Q8.6 24.6 8.6 24q0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45L22.5 34.3V9.5q0-.65.425-1.075Q23.35 8 24 8q.65 0 1.075.425.425.425.425 1.075v24.8l11.35-11.35q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05l-13.9 13.9q-.25.25-.5.35-.25.1-.55.1Z' />
    </svg>
  );
};
export default ArrowDownIcon;
