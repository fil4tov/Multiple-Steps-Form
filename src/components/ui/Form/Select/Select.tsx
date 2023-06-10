import React, { type SelectHTMLAttributes } from 'react'
import { classNames } from 'utils/helpers'
import styles from 'components/ui/Form/Select/Select.module.scss'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { className, children, placeholder, ...rest } = props

  return (
    <select
      ref={ref}
      className={classNames(['inputBase', styles.Select])}
      {...rest}
    >
      <option value="" hidden>{placeholder}</option>
      {children}
    </select>
  )
})
