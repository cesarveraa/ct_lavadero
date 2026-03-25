"use client";

import * as React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  asExternal?: boolean;
  onClick?: (e: any) => void;
}

export function Button({
  className = "",
  variant = "primary",
  size = "md",
  href,
  asExternal,
  onClick,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-heading rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111111]";
  
  const variants = {
    primary:
      "bg-[#2E86DE] text-white hover:bg-[#1B3A5B] hover:shadow-[0_0_20px_rgba(46,134,222,0.4)] focus:ring-[#2E86DE]",
    secondary:
      "bg-white text-[#0D1B2A] hover:bg-[#D9D9D9] focus:ring-white",
    outline:
      "border-2 border-[#2E86DE] text-[#2E86DE] hover:bg-[#2E86DE] hover:text-white focus:ring-[#2E86DE]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (asExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
