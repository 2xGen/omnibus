import React from 'react';
import { cn } from '@/lib/utils';

const TennisIcon = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-label="Tennis ball icon"
    className={cn('inline-block', className)}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M5.2 6.8c2.4 1.5 4 4.2 4 7.2s-1.6 5.7-4 7.2M18.8 6.8c-2.4 1.5-4 4.2-4 7.2s1.6 5.7 4 7.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export default TennisIcon;

