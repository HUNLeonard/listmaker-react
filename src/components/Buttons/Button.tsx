import React from 'react'
import { cn } from '../../utils/cn'
import { buttonType } from '../../types/buttonType';

interface ButtonProps {
  children: React.ReactNode,
  type?: buttonType,
  className?: string,
  execute?: () => void;
}

const Button = ({ children, type = "primary", className = "", execute }: ButtonProps) => {
  return (
    <button
      onClick={execute}
      className={cn('cursor-pointer px-2 py-1 text-white rounded-md',
        type === "primary"
          ? "bg-gray hover:bg-gray-light hover:text-black"
          : type === "secondary" ? "bg-gray-dark hover:bg-gray"
            : type === "third" ? "bg-gray-light hover:bg-gray text-black" :
              "",
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button