import React from 'react';

interface KayaLeafMotifProps {
  className?: string;
  size?: number;
  color?: string;
}

export const KayaLeafMotif: React.FC<KayaLeafMotifProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
    >
      <path
        d="M20 4C20 4 24 12 32 14C32 14 28 24 20 36C12 24 8 14 8 14C16 12 20 4 20 4Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 10V32"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M20 16C22.5 14.5 25 14 27 15"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M20 22C17.5 20.5 15 20 13 21"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};
