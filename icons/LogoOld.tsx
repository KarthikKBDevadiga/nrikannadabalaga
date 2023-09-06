import IconProps from './IconProps';

const LogoOld = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      width='189'
      height='189'
      viewBox='0 0 189 189'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M117 15V167'
        stroke='#061283'
        strokeWidth='30'
        strokeLinecap='round'
      />
      <path
        d='M15 15V167'
        stroke='#061283'
        strokeWidth='30'
        strokeLinecap='round'
      />
      <path
        d='M66 15V167'
        stroke='#061283'
        strokeWidth='30'
        strokeLinecap='round'
      />
      <circle cx='168.5' cy='20.5' r='20.5' fill='#061283' />
      <circle cx='168.5' cy='161.5' r='20.5' fill='#061283' />
      <circle cx='168.5' cy='89.5' r='20.5' fill='#061283' />
    </svg>
  );
};
export default LogoOld;
