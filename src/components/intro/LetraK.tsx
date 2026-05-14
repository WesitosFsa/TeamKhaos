import React from "react";

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const LetraK: React.FC<IconProps> = ({ className, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 174 190"
      className={className}
      style={style}
    >
      <g clip-path="url(#a)">
        <path
          fill="#fff"
          stroke="#fff"
          d="M17 17h35v52.75q-.125.375.25.25H69V52h18V35h17V17h53v18h-18v17h-17v18h-18v35H17V17Z"
        />
        <path
          fill="#a47aa2"
          stroke="#a47aa2"
          d="M17 105h87v17h18v17h17v18h18v17h-53v-17H87v-18H69v-17H52v52H17v-69Z"
        />
        <path
          fill="#0e0a1a"
          d="M0 0h69v35h18V17h17V0h70v52h-35v18h-17v52h17v16.75q-.125.375.25.25H174v51h-69.75q-.375.125-.25-.25V174H87v-17H69v33H0V0m17 17v157h35v-52h17v17h18v18h17v17h53v-17h-18v-18h-17v-17h-18V70h18V52h17V35h18V17h-53v18H87v17H69v18H52V17H17"
        />
        <path
          stroke="#0e0a1a"
          d="M87 35H69V0H0v190h69v-33h18m0-122V17h17M87 35h17V17M87 35v17H69v18H52V17H17v157h35v-52h17v17h18v18m17-140V0h70v52h-35m-35-35h53v18h-18v17m0 0v18h-17m17-18h-17v18m0 0v52m0-52h-18v52h18m0 0h17v16.75q-.125.375.25.25H174v51h-69.75q-.375.125-.25-.25V174m18-52v17h17v18h18v17h-53m0 0H87v-17m17 17v-17H87"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h174v190H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
