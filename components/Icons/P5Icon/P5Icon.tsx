import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  fill?: string;
}

export const P5Icon: React.FC<IconProps> = ({
  width = 26,
  height = 26,
  fill = "currentColor",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 26 26"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.29867 0C1.92458 0 0 1.92458 0 4.29867V21.7013C0 24.0754 1.92458 26 4.29867 26H21.7013C24.0754 26 26 24.0754 26 21.7013V4.29867C26 1.92458 24.0754 0 21.7013 0H4.29867ZM16.8039 13.8798C17.1201 14.1529 17.3667 14.4884 17.5439 14.8857C17.7212 15.2835 17.8098 15.7406 17.8097 16.258C17.8097 16.8235 17.7115 17.3287 17.5153 17.7742C17.3187 18.2197 17.0528 18.5959 16.7176 18.9022C16.3822 19.209 15.9894 19.4438 15.5393 19.6065C15.0889 19.7692 14.61 19.8508 14.1023 19.8508C13.2493 19.8508 12.5309 19.6517 11.9466 19.2544C11.5446 18.9809 11.2192 18.6365 10.9668 18.2248L12.2148 17.0555L12.2339 17.0483C12.3778 17.4508 12.6171 17.7742 12.9526 18.0184C13.2877 18.2626 13.6855 18.3849 14.1452 18.3849C14.404 18.3849 14.6483 18.3419 14.8782 18.2554C15.1083 18.1693 15.3093 18.0449 15.482 17.8818C15.6541 17.7192 15.7908 17.5152 15.8913 17.2713C15.9919 17.027 16.0422 16.7515 16.0422 16.445C16.0422 16.052 15.9751 15.7262 15.8411 15.4676C15.7067 15.2092 15.5322 15.0005 15.3165 14.8426C15.101 14.6847 14.859 14.5744 14.5909 14.512C14.3225 14.4499 14.0494 14.4188 13.7718 14.4188C13.5675 14.4197 13.3634 14.434 13.161 14.4618C12.948 14.4902 12.7369 14.531 12.5286 14.584C12.3252 14.6359 12.1238 14.6958 11.9251 14.7634C11.7286 14.8307 11.5536 14.9025 11.4006 14.979L11.5731 9.41786H17.3644V10.9697H13.2114L13.1108 13.1687C13.2737 13.1206 13.4676 13.0873 13.6928 13.0678C13.9179 13.049 14.1215 13.0392 14.3036 13.0392C14.8015 13.0392 15.2638 13.1111 15.6903 13.2547C16.1165 13.3983 16.4879 13.6068 16.8039 13.8798ZM4.56452 13.657V12.6943H2.912V23.041H4.63653V18.6722H4.66517C4.88536 19.0174 5.19898 19.2903 5.60645 19.4915C6.01352 19.6926 6.46141 19.7933 6.95012 19.7933C7.47683 19.7933 7.94879 19.695 8.3656 19.4986C8.78241 19.3027 9.13666 19.0389 9.42906 18.7084C9.72105 18.3778 9.94652 17.9898 10.1045 17.5444C10.2626 17.0989 10.3417 16.6223 10.3417 16.1145C10.3417 15.6068 10.2601 15.1326 10.0973 14.6918C9.93434 14.2512 9.7044 13.868 9.40763 13.5421C9.11056 13.2165 8.75591 12.9603 8.34397 12.7731C7.93203 12.5864 7.48191 12.4929 6.99319 12.4929C6.67712 12.4929 6.39184 12.529 6.13813 12.6007C5.88423 12.6727 5.65673 12.7639 5.45563 12.8737C5.25434 12.9841 5.08412 13.1085 4.94538 13.2475C4.80634 13.3864 4.69381 13.523 4.60769 13.657H4.56452ZM8.46625 15.3167C8.5476 15.5803 8.58843 15.8462 8.58843 16.1144C8.58843 16.3826 8.5475 16.6509 8.46625 16.9192C8.38459 17.1875 8.26252 17.4271 8.09971 17.6377C7.9367 17.8486 7.73073 18.0209 7.4817 18.1552C7.23257 18.2893 6.94037 18.3562 6.60522 18.3562C6.28905 18.3562 6.0062 18.2918 5.75737 18.1623C5.51245 18.0365 5.29503 17.8631 5.11784 17.6523C4.94078 17.4421 4.80434 17.2008 4.71545 16.9407C4.62424 16.6775 4.57895 16.4116 4.57895 16.1433C4.57895 15.8752 4.62424 15.6068 4.71545 15.3385C4.80645 15.0702 4.94041 14.8307 5.11784 14.6198C5.29496 14.4093 5.50824 14.2368 5.75737 14.1025C6.0063 13.9684 6.28905 13.9013 6.60522 13.9013C6.94037 13.9013 7.23257 13.9659 7.4817 14.0952C7.73094 14.2247 7.9367 14.3949 8.09961 14.6054C8.26252 14.8162 8.38459 15.0534 8.46625 15.3167ZM22.2486 10.0935L21.153 10.4241L21.1532 9.28217H20.4145V10.424L19.3107 10.0683L19.0953 10.7307L20.1947 11.1276L19.5175 12.0548L20.0718 12.4771L20.7662 11.5585L21.479 12.5019L22.0499 12.0878L21.3727 11.1276L22.4637 10.7553L22.2486 10.0935Z"
      fill={fill}
    />
  </svg>
);