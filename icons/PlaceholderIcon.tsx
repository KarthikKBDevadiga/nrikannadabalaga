import IconProps from './IconProps';

const PlaceholderIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={(className = '')}
      preserveAspectRatio='none'
      stroke='currentColor'
      fill='none'
      viewBox='0 0 200 200'
      aria-hidden='true'
    >
      <path
        vectorEffect='non-scaling-stroke'
        strokeWidth={1}
        d='M0 0l200 200M0 200L200 0'
      />
    </svg>
  );
};
export default PlaceholderIcon;
