import IconProps from './IconProps';

const SaveIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      height='48'
      width='48'
      viewBox='0 0 48 48'
      fill='currentColor'
    >
      <path d='M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h23.9q.6 0 1.175.25.575.25.975.65l6.05 6.05q.4.4.65.975T42 15.1V39q0 1.2-.9 2.1-.9.9-2.1.9Zm30-26.8L32.8 9H9v30h30ZM24 35.75q2.15 0 3.675-1.525T29.2 30.55q0-2.15-1.525-3.675T24 25.35q-2.15 0-3.675 1.525T18.8 30.55q0 2.15 1.525 3.675T24 35.75ZM13.15 18.8h14.9q.65 0 1.075-.425.425-.425.425-1.075v-4.15q0-.65-.425-1.075-.425-.425-1.075-.425h-14.9q-.65 0-1.075.425-.425.425-.425 1.075v4.15q0 .65.425 1.075.425.425 1.075.425ZM9 15.2V39 9Z' />
    </svg>
  );
};
export default SaveIcon;
