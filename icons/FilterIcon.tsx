import IconProps from './IconProps';

const FilterIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='48'
      width='48'
      className={className}
      viewBox='0 0 48 48'
      fill='currentColor'
    >
      <path d='M22 40q-.85 0-1.425-.575Q20 38.85 20 38V26L8.05 10.75q-.7-.85-.2-1.8Q8.35 8 9.4 8h29.2q1.05 0 1.55.95t-.2 1.8L28 26v12q0 .85-.575 1.425Q26.85 40 26 40Zm2-13.8L36 11H12Zm0 0Z' />
    </svg>
  );
};
export default FilterIcon;
