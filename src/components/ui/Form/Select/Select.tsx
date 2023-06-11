import React, { type SelectHTMLAttributes } from 'react'
import { cls } from 'utils/helpers'
import styles from './Select.module.scss'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { className, children, placeholder, ...rest } = props

  return (
    <select
      ref={ref}
      className={cls(['inputBase', styles.Select])}
      {...rest}
    >
      <option value="" hidden>{placeholder}</option>
      {children}
    </select>
  )
})
