import IconProps from './IconProps';

const LocationIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      enableBackground='new 0 0 48 48'
      height='48px'
      viewBox='0 0 48 48'
      width='48px'
      fill='currentColor'
    >
      <path d='M24 23.5q1.45 0 2.475-1.025Q27.5 21.45 27.5 20q0-1.45-1.025-2.475Q25.45 16.5 24 16.5q-1.45 0-2.475 1.025Q20.5 18.55 20.5 20q0 1.45 1.025 2.475Q22.55 23.5 24 23.5Zm0 16.55q6.65-6.05 9.825-10.975Q37 24.15 37 20.4q0-5.9-3.775-9.65T24 7q-5.45 0-9.225 3.75Q11 14.5 11 20.4q0 3.75 3.25 8.675Q17.5 34 24 40.05Zm.05 3.35q-.35 0-.65-.1-.3-.1-.55-.3-7.45-6.55-11.15-12.15Q8 25.25 8 20.4q0-7.5 4.825-11.95Q17.65 4 24 4q6.35 0 11.175 4.45Q40 12.9 40 20.4q0 4.85-3.7 10.45T25.15 43q-.25.2-.525.3-.275.1-.575.1Zm-.05-23Z' />
    </svg>
  );
};
export default LocationIcon;
