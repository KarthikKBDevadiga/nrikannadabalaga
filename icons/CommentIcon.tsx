import IconProps from './IconProps';

const CommentIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      height='48'
      width='48'
      viewBox='0 0 48 48'
      fill='currentColor'
    >
      <path d='M13.5 28.05h12.7q.6 0 1.025-.425.425-.425.425-1.075 0-.65-.425-1.075-.425-.425-1.075-.425h-12.7q-.6 0-1.025.425Q12 25.9 12 26.55q0 .65.425 1.075.425.425 1.075.425Zm0-6.5h21.05q.6 0 1.025-.425Q36 20.7 36 20.05q0-.65-.425-1.075-.425-.425-1.075-.425H13.45q-.6 0-1.025.425Q12 19.4 12 20.05q0 .65.425 1.075.425.425 1.075.425Zm0-6.5h21.05q.6 0 1.025-.425Q36 14.2 36 13.55q0-.65-.425-1.075-.425-.425-1.075-.425H13.45q-.6 0-1.025.425Q12 12.9 12 13.55q0 .65.425 1.075.425.425 1.075.425ZM4 40.4V7q0-1.15.9-2.075Q5.8 4 7 4h34q1.15 0 2.075.925Q44 5.85 44 7v26q0 1.15-.925 2.075Q42.15 36 41 36H12l-5.45 5.45q-.7.7-1.625.325Q4 41.4 4 40.4Zm3-3.65L10.75 33H41V7H7ZM7 7v29.75Z' />
    </svg>
  );
};
export default CommentIcon;
