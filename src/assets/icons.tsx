export const Scan = ({ ...props }) => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2.82561C0 1.26507 1.26507 0 2.82561 0H4.59161C6.15215 0 7.41722 1.26507 7.41722 2.82561V4.59161C7.41722 6.15215 6.15215 7.41722 4.59161 7.41722H2.82561C1.26507 7.41722 0 6.15215 0 4.59161V2.82561ZM2.82561 1.69536C2.20139 1.69536 1.69536 2.20139 1.69536 2.82561V4.59161C1.69536 5.21583 2.20139 5.72185 2.82561 5.72185H4.59161C5.21583 5.72185 5.72185 5.21583 5.72185 4.59161V2.82561C5.72185 2.20139 5.21583 1.69536 4.59161 1.69536H2.82561ZM0 11.4084C0 9.84791 1.26507 8.58284 2.82561 8.58284H4.59161C6.15215 8.58284 7.41722 9.8479 7.41722 11.4084V13.1744C7.41722 14.735 6.15215 16.0001 4.59161 16.0001H2.82561C1.26507 16.0001 0 14.735 0 13.1744V11.4084ZM2.82561 10.2782C2.20139 10.2782 1.69536 10.7842 1.69536 11.4084V13.1744C1.69536 13.7987 2.20139 14.3047 2.82561 14.3047H4.59161C5.21583 14.3047 5.72185 13.7987 5.72185 13.1744V11.4084C5.72185 10.7842 5.21583 10.2782 4.59161 10.2782H2.82561ZM11.4083 0C9.84779 0 8.58272 1.26507 8.58272 2.82561V4.59161C8.58272 6.15215 9.84779 7.41722 11.4083 7.41722H13.1743C14.7349 7.41722 15.9999 6.15215 15.9999 4.59161V2.82561C15.9999 1.26507 14.7349 0 13.1743 0H11.4083ZM10.2781 2.82561C10.2781 2.20139 10.7841 1.69536 11.4083 1.69536H13.1743C13.7985 1.69536 14.3046 2.20139 14.3046 2.82561V4.59161C14.3046 5.21583 13.7985 5.72185 13.1743 5.72185H11.4083C10.7841 5.72185 10.2781 5.21583 10.2781 4.59161V2.82561ZM15.7351 9.96026C15.7351 10.7795 15.0709 11.4437 14.2516 11.4437C13.4323 11.4437 12.7682 10.7795 12.7682 9.96026C12.7682 9.14098 13.4323 8.47682 14.2516 8.47682C15.0709 8.47682 15.7351 9.14098 15.7351 9.96026ZM9.96026 11.4437C10.7795 11.4437 11.4437 10.7795 11.4437 9.96026C11.4437 9.14098 10.7795 8.47682 9.96026 8.47682C9.14098 8.47682 8.47682 9.14098 8.47682 9.96026C8.47682 10.7795 9.14098 11.4437 9.96026 11.4437ZM15.7351 14.2517C15.7351 15.071 15.0709 15.7352 14.2516 15.7352C13.4323 15.7352 12.7682 15.071 12.7682 14.2517C12.7682 13.4325 13.4323 12.7683 14.2516 12.7683C15.0709 12.7683 15.7351 13.4325 15.7351 14.2517ZM9.96026 15.7352C10.7795 15.7352 11.4437 15.071 11.4437 14.2517C11.4437 13.4325 10.7795 12.7683 9.96026 12.7683C9.14098 12.7683 8.47682 13.4325 8.47682 14.2517C8.47682 15.071 9.14098 15.7352 9.96026 15.7352Z"
      fill="currentColor"
      fillOpacity="0.3"
    />
  </svg>
);

export const Download = ({ ...props }) => <svg />;

export const ExternalLinkIcon = ({ ...props }) => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      left: 0,
      top: 0,
    }}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4C2.89543 4 2 4.89543 2 6V12C2 13.1046 2.89543 14 4 14H10C11.1046 14 12 13.1046 12 12V9.66667C12 9.11438 12.4477 8.66667 13 8.66667C13.5523 8.66667 14 9.11438 14 9.66667V12C14 14.2091 12.2091 16 10 16H4C1.79086 16 0 14.2091 0 12V6C0 3.79086 1.79086 2 4 2H6.33333C6.88562 2 7.33333 2.44772 7.33333 3C7.33333 3.55228 6.88562 4 6.33333 4H4Z"
      fill="currentColor"
      fillOpacity={0.3}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.5 1C9.5 0.447715 9.94772 0 10.5 0H15C15.5523 0 16 0.447715 16 1V5.5C16 6.05228 15.5523 6.5 15 6.5C14.4477 6.5 14 6.05228 14 5.5V3.41421L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289L12.5858 2H10.5C9.94772 2 9.5 1.55228 9.5 1Z"
      fill="currentColor"
      fillOpacity={0.3}
    />
  </svg>
);

export const AlertIcon = ({ ...props }) => {
  return (
    <svg
      aria-hidden="true"
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.81753 1.60122C7.39283 0.530035 8.46953 0 9.50409 0C10.5507 0 11.6022 0.539558 12.1805 1.59767L18.6047 13.3334C18.882 13.8283 19 14.3568 19 14.8622C19 16.5296 17.7949 18 15.9149 18H3.08514C1.20508 18 0 16.5296 0 14.8622C0 14.3454 0.131445 13.8172 0.405555 13.3379L6.81753 1.60122ZM9.50409 2C9.13355 2 8.77256 2.18675 8.57866 2.54907L8.57458 2.5567L2.14992 14.3166L2.144 14.3268C2.04638 14.4959 2 14.6817 2 14.8622C2 15.5497 2.43032 16 3.08514 16H15.9149C16.5697 16 17 15.5497 17 14.8622C17 14.6681 16.9554 14.4805 16.8588 14.309L16.8529 14.2986L10.4259 2.55741C10.2191 2.1792 9.86395 2 9.50409 2Z"
        fill="currentColor"
      />
      <path
        d="M9.5 11.2297C9.01639 11.2297 8.7459 10.9419 8.72951 10.4186L8.60656 6.4157C8.59016 5.88372 8.95902 5.5 9.4918 5.5C10.0164 5.5 10.4016 5.89244 10.3852 6.42442L10.2623 10.4099C10.2377 10.9419 9.96721 11.2297 9.5 11.2297ZM9.5 14.5C8.95082 14.5 8.5 14.0901 8.5 13.5058C8.5 12.9215 8.95082 12.5116 9.5 12.5116C10.0492 12.5116 10.5 12.9128 10.5 13.5058C10.5 14.0988 10.041 14.5 9.5 14.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const DisconnectIcon = ({ ...props }) => {
  return (
    <svg
      aria-hidden="true"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        left: 0,
        top: 0,
      }}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 0C1.79086 0 0 1.79086 0 4V10C0 12.2091 1.79086 14 4 14H6C6.55228 14 7 13.5523 7 13C7 12.4477 6.55228 12 6 12H4C2.89543 12 2 11.1046 2 10V4C2 2.89543 2.89543 2 4 2H6C6.55228 2 7 1.55228 7 1C7 0.447715 6.55228 0 6 0H4ZM11.7071 3.29289C11.3166 2.90237 10.6834 2.90237 10.2929 3.29289C9.90237 3.68342 9.90237 4.31658 10.2929 4.70711L11.5858 6H9.5H6C5.44772 6 5 6.44772 5 7C5 7.55228 5.44772 8 6 8H9.5H11.5858L10.2929 9.29289C9.90237 9.68342 9.90237 10.3166 10.2929 10.7071C10.6834 11.0976 11.3166 11.0976 11.7071 10.7071L14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289L11.7071 3.29289Z"
        fill="currentColor"
        fillOpacity="0.4"
      />
    </svg>
  );
};

export const TickIcon = ({ ...props }) => {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM13.274 7.13324C13.6237 6.70579 13.5607 6.07577 13.1332 5.72604C12.7058 5.37632 12.0758 5.43932 11.726 5.86676L7.92576 10.5115L6.20711 8.79289C5.81658 8.40237 5.18342 8.40237 4.79289 8.79289C4.40237 9.18342 4.40237 9.81658 4.79289 10.2071L7.29289 12.7071C7.49267 12.9069 7.76764 13.0128 8.04981 12.9988C8.33199 12.9847 8.59505 12.8519 8.77396 12.6332L13.274 7.13324Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const RetryIcon = ({ ...props }) => {
  return (
    <svg
      aria-hidden="true"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM24.5001 8.74263C25.0834 8.74263 25.5563 9.21551 25.5563 9.79883V14.5997C25.5563 15.183 25.0834 15.6559 24.5001 15.6559H19.6992C19.1159 15.6559 18.643 15.183 18.643 14.5997C18.643 14.0164 19.1159 13.5435 19.6992 13.5435H21.8378L20.071 11.8798C20.0632 11.8724 20.0555 11.865 20.048 11.8574C19.1061 10.915 17.8835 10.3042 16.5643 10.1171C15.2452 9.92999 13.9009 10.1767 12.7341 10.82C11.5674 11.4634 10.6413 12.4685 10.0955 13.684C9.54968 14.8994 9.41368 16.2593 9.70801 17.5588C10.0023 18.8583 10.711 20.0269 11.7273 20.8885C12.7436 21.7502 14.0124 22.2582 15.3425 22.336C16.6726 22.4138 17.9919 22.0572 19.1017 21.3199C19.5088 21.0495 19.8795 20.7333 20.2078 20.3793C20.6043 19.9515 21.2726 19.9262 21.7004 20.3228C22.1282 20.7194 22.1534 21.3876 21.7569 21.8154C21.3158 22.2912 20.8176 22.7161 20.2706 23.0795C18.7793 24.0702 17.0064 24.5493 15.2191 24.4448C13.4318 24.3402 11.7268 23.6576 10.3612 22.4998C8.9956 21.3419 8.0433 19.7716 7.6478 18.0254C7.2523 16.2793 7.43504 14.4519 8.16848 12.8186C8.90192 11.1854 10.1463 9.83471 11.7142 8.97021C13.282 8.10572 15.0884 7.77421 16.861 8.02565C18.6282 8.27631 20.2664 9.09278 21.5304 10.3525L23.4439 12.1544V9.79883C23.4439 9.21551 23.9168 8.74263 24.5001 8.74263Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const CopyToClipboardIcon = ({ ...props }) => (
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 9.5V7C14 5.89543 13.1046 5 12 5H7C5.89543 5 5 5.89543 5 7V12C5 13.1046 5.89543 14 7 14H9.5"
      stroke="var(--body-color-muted)"
      strokeWidth="2"
    />
    <rect
      x="10"
      y="10"
      width="9"
      height="9"
      rx="2"
      stroke="var(--body-color-muted)"
      strokeWidth="2"
    />
    <path
      d="M1 3L3 5L7 1"
      stroke="var(--body-color)"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
