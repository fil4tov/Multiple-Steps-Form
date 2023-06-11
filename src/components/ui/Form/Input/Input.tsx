import React, { type InputHTMLAttributes } from 'react'
import { cls } from 'utils/helpers'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...rest } = props
  return (
    <input
      ref={ref}
      className={cls(['inputBase', className])}
      {...rest}
    />
  )
})
