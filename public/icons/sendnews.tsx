import clsx from 'clsx';

export default function SendNewsletterBtn(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={clsx('fill-current', props.className)}
    >
      <g clipPath="url(#clip0_8_354)">
        <path
          d="M33.6677 0.331927C33.34 0.00425214 32.8453 -0.0909479 32.4203 0.0918022L0.687279 13.6918C0.295429 13.8588 0.0308669 14.232 0.00217939 14.657C-0.0265081 15.0809 0.184717 15.4859 0.550004 15.705L7.32663 19.7706L4.59154 27.9748C4.45533 28.3821 4.56158 28.8314 4.86482 29.1346C5.08072 29.3505 5.37057 29.4665 5.66615 29.4665C5.78558 29.4665 5.90734 29.4476 6.02485 29.4079L14.2291 26.6728L18.2948 33.4498C18.5007 33.793 18.8703 34 19.2666 34C19.2921 34 19.3176 33.9989 19.3429 33.9979C19.7679 33.9692 20.1408 33.7046 20.308 33.3128L33.9078 1.5793C34.0904 1.1543 33.9952 0.659602 33.6677 0.331927ZM27.9039 4.4931L12.2911 20.1061L3.61702 14.9014L27.9039 4.4931ZM7.45817 26.5415L9.31712 20.9648L11.641 22.359L13.035 24.6827L7.45817 26.5417V26.5415ZM19.0983 30.383L13.8935 21.7088L29.5063 6.09578L19.0983 30.383Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_8_354">
          <rect width="34" height="34" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
