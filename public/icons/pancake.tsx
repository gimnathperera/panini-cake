import clsx from 'clsx';

export default function PanCake(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="37"
      height="31"
      viewBox="0 0 37 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={clsx('fill-current', props.className)}
    >
      <g clipPath="url(#clip0_8_272)">
        <path
          d="M36.3975 25.5053H32.2633V23.291H32.3049C33.3852 23.291 34.2577 22.4299 34.2577 21.3638C34.2577 20.8512 34.05 20.3797 33.7176 20.0311C34.05 19.6826 34.2577 19.211 34.2577 18.6985C34.2577 18.1859 34.05 17.7143 33.7176 17.3658C34.05 17.0172 34.2577 16.5457 34.2577 16.0331C34.2577 14.967 33.3852 14.1059 32.3049 14.1059H32.2633V11.6455V10.6409C32.2633 8.03708 30.1235 5.9048 27.4643 5.9048H22.7277C22.9978 5.49475 23.164 5.00269 23.164 4.46962C23.164 3.71102 22.8316 3.03443 22.2914 2.54237C22.6446 1.9683 23.2886 1.29171 24.4104 1.14819C24.7428 1.10719 24.9714 0.820149 24.9298 0.492106C24.8883 0.164064 24.5974 -0.061465 24.265 -0.0204597C22.6446 0.164064 21.7305 1.12769 21.2319 1.94779C21.0034 1.88629 20.7541 1.84528 20.484 1.84528C19.0298 1.84528 17.8456 3.01393 17.8456 4.44912C17.8456 4.98219 18.0118 5.47425 18.2819 5.8843H9.45256C6.81415 5.8843 4.65357 7.99607 4.65357 10.6204V11.625V14.0854H4.61202C3.53172 14.0854 2.65918 14.9465 2.65918 16.0126C2.65918 16.5252 2.86693 16.9967 3.19933 17.3453C2.86693 17.6938 2.65918 18.1654 2.65918 18.6779C2.65918 19.1905 2.86693 19.6621 3.19933 20.0106C2.86693 20.3592 2.65918 20.8307 2.65918 21.3433C2.65918 22.4094 3.53172 23.2705 4.61202 23.2705H4.65357V25.4848H0.602471C0.270073 25.4848 0 25.7514 0 26.0794C0 28.7858 2.22291 30.9795 4.96519 30.9795H32.0348C34.7771 30.9795 37 28.7858 37 26.0794C37 25.7514 36.7299 25.4848 36.3975 25.4848V25.5053ZM32.3257 22.1224H25.6985C25.8231 21.8764 25.8855 21.5893 25.8855 21.3023V20.6257H32.3464C32.7619 20.6257 33.0943 20.9537 33.0943 21.3638C33.0943 21.7738 32.7619 22.1019 32.3464 22.1019L32.3257 22.1224ZM4.69512 19.4571C4.27962 19.4571 3.94722 19.129 3.94722 18.719C3.94722 18.3089 4.27962 17.9809 4.69512 17.9809H21.8344V19.4776H4.69512V19.4571ZM21.8344 14.1059H20.1932V10.6204C20.1932 10.1694 20.5255 9.80031 20.941 9.7593C21.1903 9.7388 21.3981 9.80031 21.5851 9.96433C21.7513 10.1283 21.8551 10.3334 21.8551 10.5589V14.1059H21.8344ZM20.1724 15.9716V15.295H21.8136V16.7917H19.9854C20.1101 16.5457 20.1724 16.2586 20.1724 15.9716ZM32.3257 17.9604C32.7412 17.9604 33.0736 18.2884 33.0736 18.6985C33.0736 19.1085 32.7412 19.4365 32.3257 19.4365H25.8647V17.9399H32.3257V17.9604ZM33.0736 16.0331C33.0736 16.4432 32.7412 16.7712 32.3257 16.7712H25.8647V16.2791C25.8647 15.9306 25.9062 15.6026 25.9893 15.2745H32.3049C32.7204 15.2745 33.0528 15.6026 33.0528 16.0126L33.0736 16.0331ZM26.5087 14.1059C27.2358 12.9782 28.5031 12.2401 29.9573 12.2401H31.0792V14.1059H26.5087ZM19.0921 4.49012C19.0921 3.71102 19.7361 3.05494 20.5463 3.05494C20.6294 3.05494 20.7125 3.05494 20.7956 3.07544C20.7956 3.13695 20.7748 3.17795 20.7541 3.19846C20.6917 3.50599 20.8787 3.83404 21.2111 3.89555C21.2527 3.89555 21.2942 3.89555 21.3358 3.89555C21.502 3.89555 21.6474 3.83404 21.7513 3.71102C21.8967 3.93655 21.9798 4.18258 21.9798 4.46962C21.9798 5.24872 21.3358 5.9048 20.5255 5.9048C19.7153 5.9048 19.0713 5.26922 19.0713 4.46962L19.0921 4.49012ZM5.92083 10.6409C5.92083 8.69316 7.54127 7.09396 9.51488 7.09396H27.4851C29.4587 7.09396 31.0792 8.69316 31.0792 10.6409V11.0715H29.9573C27.6929 11.0715 25.7816 12.4656 25.0129 14.4339C24.9921 14.4749 24.9714 14.5364 24.9506 14.5979C24.7636 15.131 24.6597 15.7051 24.6597 16.2996V20.0516V21.3228C24.6597 21.5483 24.5559 21.7738 24.3897 21.9174C24.2235 22.0814 23.9949 22.1429 23.7456 22.1224C23.3302 22.0814 22.9978 21.6918 22.9978 21.2613V10.5794C22.9978 10.0258 22.7485 9.47226 22.333 9.10322C21.959 8.77517 21.4812 8.59065 20.9826 8.59065C20.9203 8.59065 20.8579 8.59065 20.7956 8.59065C19.7777 8.69316 18.9674 9.57478 18.9674 10.6409V15.9921C18.9674 16.2381 18.8636 16.4637 18.6766 16.6277C18.4896 16.7917 18.2403 16.8532 17.9702 16.7917C17.5963 16.7302 17.3262 16.3612 17.3262 15.9306C17.3262 15.4795 17.2639 15.0285 17.1392 14.6184C17.1392 14.6184 17.1392 14.5774 17.1392 14.5569C16.5368 12.5477 14.667 11.092 12.4441 11.092H5.94161V10.6614L5.92083 10.6409ZM5.92083 12.2401H12.4234C13.8153 12.2401 15.0202 12.9987 15.6642 14.1059H5.92083V12.2401ZM4.69512 15.295H16.1005C16.1421 15.5 16.1628 15.7051 16.1628 15.9101C16.1628 16.2176 16.2459 16.5252 16.3498 16.7917H4.69512C4.27962 16.7917 3.94722 16.4637 3.94722 16.0536C3.94722 15.6436 4.27962 15.3155 4.69512 15.3155V15.295ZM3.92645 21.3843C3.92645 20.9742 4.25884 20.6462 4.67434 20.6462H21.8136V21.2613C21.8136 21.5688 21.8967 21.8764 22.0213 22.1429H4.69512C4.27962 22.1429 3.94722 21.8149 3.94722 21.4048L3.92645 21.3843ZM5.92083 23.291H31.0792V25.5053H5.92083V23.291ZM32.0348 29.8314H4.96519C3.09545 29.8314 1.53734 28.4782 1.24649 26.6945H35.7743C35.4834 28.4577 33.9253 29.8314 32.0556 29.8314H32.0348Z"
          fill="#BC0000"
        />
      </g>
      <defs>
        <clipPath id="clip0_8_272">
          <rect width="37" height="31" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
