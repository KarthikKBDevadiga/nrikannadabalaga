import IconProps from './IconProps';

const CompanyIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      height='48'
      width='48'
      viewBox='0 0 48 48'
      fill='currentColor'
    >
      <path d='M8.55 40.3q-.65 0-1.1-.45Q7 39.4 7 38.75v-22.8q0-.6.45-1.075t1.1-.475h6.6V7.85q0-.6.45-1.075t1.05-.475h14.7q.6 0 1.075.475T32.9 7.85v14.7h6.55q.65 0 1.1.45.45.45.45 1.1v14.65q0 .65-.45 1.1-.45.45-1.1.45H27.3v-8.15h-6.6v8.15Zm0-1.55h6.6v-6.6h-6.6Zm0-8.1h6.6V24.1h-6.6Zm0-8.1h6.6v-6.6h-6.6Zm8.1 8.1h6.6V24.1h-6.6Zm0-8.1h6.6v-6.6h-6.6Zm0-8.15h6.6V7.85h-6.6Zm8.1 16.25h6.6V24.1h-6.6Zm0-8.1h6.6v-6.6h-6.6Zm0-8.15h6.6V7.85h-6.6Zm8.15 24.35h6.55v-6.6H32.9Zm0-8.1h6.55V24.1H32.9Z' />
    </svg>
  );
};
export default CompanyIcon;
