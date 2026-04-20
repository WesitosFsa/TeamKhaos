import React from "react";

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ArribaLetra: React.FC<IconProps> = ({ className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
      fill="none"
      viewBox="0 0 148 44"
    >
      <g clip-path="url(#a)">
        <path
          fill="#fefefe"
          stroke="#fefefe"
          d="M110 10h1v1h-1z"
          opacity=".996"
        />
        <g opacity=".996">
          <path
            fill="#fefefe"
            d="M96 13h4v9h-4v3.75q.125.375-.25.25H78v-3.75q-.125-.375.25-.25H96v-9"
          />
          <path
            stroke="#fefefe"
            d="M96 22h4v-9h-4v9Zm0 0v3.75q.125.375-.25.25H78v-3.75q-.125-.375.25-.25H96Z"
          />
        </g>
        <g opacity=".996">
          <path fill="#fefefe" d="M122 22h4v4h5v-4h4v4h-4v5h-5v-5h-4v-4" />
          <path
            stroke="#fefefe"
            d="M126 26v-4h-4v4h4Zm0 0h5m-5 0v5h5v-5m0 0v-4h4v4h-4Z"
          />
        </g>
        <path
          fill="#fff"
          stroke="#fff"
          d="M0 0h34.75q.375-.125.25.25V9H22v34.75q.125.375-.25.25H13V9.25q.125-.375-.25-.25H0V0ZM39 0h26v9H48v9h17v8H48v9h17v9H39V0ZM78 0h18v5h4v4h4v35H91V31h-8v13H70V9.25q-.125-.375.25-.25H74V5h4V0Zm5 9v4h-4.5q-.5 0-.5.5V26h18v-4h4v-9h-9V9h-8ZM109 0h8v5h5v8h13V5.25q-.125-.375.25-.25H139V0h9v43.75q.125.375-.25.25H139V22h-8v4h-5v-4h-9v22h-8V0Zm1 10v1h1v-1z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h148v44H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
