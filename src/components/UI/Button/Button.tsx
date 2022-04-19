import React, { FC } from 'react'

interface ButtonProps{
  children: string;
}

const Button: FC<ButtonProps> = ({children}) => {
  return (
    <button>{children}</button>
  )
}

export default Button;