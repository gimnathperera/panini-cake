import clsx from 'clsx';

export default function Mastecard(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="46"
      height="29"
      viewBox="0 0 46 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={clsx('fill-current', props.className)}
    >
      <g clipPath="url(#clip0_9_361)">
        <path
          opacity="0.07"
          d="M42.3684 0H3.63158C1.57368 0 0 1.57083 0 3.625V25.375C0 27.4292 1.69474 29 3.63158 29H42.3684C44.4263 29 46 27.4292 46 25.375V3.625C46 1.57083 44.3053 0 42.3684 0Z"
          fill="black"
        />
        <path
          d="M42.3684 1.20837C43.7 1.20837 44.7895 2.29587 44.7895 3.62504V25.375C44.7895 26.7042 43.7 27.7917 42.3684 27.7917H3.63159C2.30001 27.7917 1.21054 26.7042 1.21054 25.375V3.62504C1.21054 2.29587 2.30001 1.20837 3.63159 1.20837H42.3684Z"
          fill="white"
        />
        <path
          d="M18.1579 22.9583C22.8378 22.9583 26.6316 19.1714 26.6316 14.5C26.6316 9.82855 22.8378 6.04163 18.1579 6.04163C13.478 6.04163 9.6842 9.82855 9.6842 14.5C9.6842 19.1714 13.478 22.9583 18.1579 22.9583Z"
          fill="#EB001B"
        />
        <path
          d="M27.8421 22.9583C32.522 22.9583 36.3158 19.1714 36.3158 14.5C36.3158 9.82855 32.522 6.04163 27.8421 6.04163C23.1622 6.04163 19.3684 9.82855 19.3684 14.5C19.3684 19.1714 23.1622 22.9583 27.8421 22.9583Z"
          fill="#F79E1B"
        />
        <path
          d="M26.6316 14.5C26.6316 11.6 25.1789 9.06255 23 7.61255C20.821 9.18338 19.3684 11.7209 19.3684 14.5C19.3684 17.2792 20.821 19.9375 23 21.3876C25.1789 19.9375 26.6316 17.4 26.6316 14.5Z"
          fill="#FF5F00"
        />
      </g>
      <defs>
        <clipPath id="clip0_9_361">
          <rect width="46" height="29" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
