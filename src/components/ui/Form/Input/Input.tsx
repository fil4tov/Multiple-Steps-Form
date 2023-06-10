import React, { type InputHTMLAttributes } from 'react'
import { classNames } from 'utils/helpers'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...rest } = props
  return (
    <input
      ref={ref}
      className={classNames(['inputBase', className])}
      {...rest}
    />
  )
})
