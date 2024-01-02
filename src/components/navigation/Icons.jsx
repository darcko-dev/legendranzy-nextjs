import React from "react";
export const ChevronDown = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Lock = ({ fill, size, height, width, ...props }) => {
  const color = fill;

  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(3.5 2)">
        <path
          d="M9.121,6.653V4.5A4.561,4.561,0,0,0,0,4.484V6.653"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(3.85 0.75)"
        />
        <path
          d="M.5,0V2.221"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(7.91 12.156)"
        />
        <path
          d="M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.4,0,7.66,0Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(0.75 6.824)"
        />
      </g>
    </svg>
  );
};

export const Activity = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <path d="M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78" />
        <path d="M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z" />
        <path d="M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187" />
      </g>
    </svg>
  );
};

export const Flash = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Server = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const TagUser = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Scale = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM18 6 6 18"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M18 10V6h-4M6 14v4h4"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Minecraft = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size || width}
      height={size || height}
      viewBox="0 0 48 48"
      {...props}
    >
      <linearGradient
        id="_6Dg60S4aLTMSz540MYGva_f1ZPU9Xpm8Dh_gr1"
        x1="18.881"
        x2="25.206"
        y1="5.325"
        y2="35.082"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4caf50"></stop>
        <stop offset=".486" stopColor="#4aae50"></stop>
        <stop offset=".661" stopColor="#43a94e"></stop>
        <stop offset=".786" stopColor="#38a14c"></stop>
        <stop offset=".887" stopColor="#279648"></stop>
        <stop offset=".972" stopColor="#184"></stop>
        <stop offset="1" stopColor="#088242"></stop>
      </linearGradient>
      <path
        fill="url(#_6Dg60S4aLTMSz540MYGva_f1ZPU9Xpm8Dh_gr1)"
        d="M11,7h10l-1,4h3l-2,5h4l2-5h3l1-4h10l-6,26H3L11,7z"
      ></path>
      <linearGradient
        id="_6Dg60S4aLTMSz540MYGvb_f1ZPU9Xpm8Dh_gr2"
        x1="19.618"
        x2="28.191"
        y1="4.223"
        y2="44.555"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#41474a"></stop>
        <stop offset="1" stopColor="#323538"></stop>
      </linearGradient>
      <path
        fill="url(#_6Dg60S4aLTMSz540MYGvb_f1ZPU9Xpm8Dh_gr2)"
        d="M40.123,6h-9.072c-0.464,0-0.867,0.319-0.973,0.77l-1,4.23h-2.115 c-0.45,0-0.845,0.301-0.964,0.735l-0.307,1.119l-4.608-6.436C20.896,6.156,20.594,6,20.271,6h-8.91 c-0.435,0-0.82,0.281-0.953,0.696L2.185,32.423c-0.113,0.355-0.02,0.743,0.242,1.008l7.895,7.976 C10.697,41.786,11.208,42,11.742,42h8.597c0.46,0,0.861-0.314,0.971-0.76l1.335-5.412l0.456,0.508 C23.481,36.759,24.022,37,24.59,37h1.728l3.504,4.269C30.202,41.732,30.769,42,31.368,42h8.737c0.476,0,0.885-0.335,0.98-0.801 l4.782-23.544c0.086-0.425,0.032-0.867-0.155-1.259L41.026,6.57C40.86,6.222,40.509,6,40.123,6z M31.333,8h8.133l-1.808,8h-3.754 l1.086-4.402c0.029-0.146-0.009-0.299-0.104-0.415C34.792,11.067,34.649,11,34.5,11h-3.908L31.333,8z M27.5,11.916V12h6.39 l-1.012,4h-6.581l1.087-3.66L27.5,11.916z M18.887,11h-7.715l0.938-3h7.688L18.887,11z M12.334,33.042H4.369L4.328,33H4.297 l3.125-10h1.915L7.52,29.362c-0.043,0.151-0.014,0.313,0.081,0.438C7.695,29.927,7.843,30,8,30h5.217L12.334,33.042z M9.52,26 h4.858l-0.871,3H8.663L9.52,26z M25.094,33l2.628-11h-2.094h-1.121l-1.352,5H17.4l1.354-5h-3.215l-0.871,3H9.806l0.675-2.362 c0.043-0.151,0.014-0.313-0.081-0.438C10.305,22.073,10.157,22,10,22H7.734l3.125-10h7.725H19h2.292l-1.354,5H25h1h11.432 l-3.615,16H25.094z"
      ></path>
      <linearGradient
        id="_6Dg60S4aLTMSz540MYGvc_f1ZPU9Xpm8Dh_gr3"
        x1="19.456"
        x2="20.957"
        y1="26.581"
        y2="33.642"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#c26715"></stop>
        <stop offset="0" stopColor="#db8437"></stop>
        <stop offset="1" stopColor="#cc6b2d"></stop>
      </linearGradient>
      <path
        fill="url(#_6Dg60S4aLTMSz540MYGvc_f1ZPU9Xpm8Dh_gr3)"
        d="M18.841,40l-6.507-7H4.328l6.854,7H18.841z M38.801,40l-4.985-7h-8.722l5.67,7H38.801z M23.036,33H23l1.117-4.676L23.084,27h-5.6l6.587,8.001h0.607L23.036,33z"
      ></path>
    </svg>
  );
};
