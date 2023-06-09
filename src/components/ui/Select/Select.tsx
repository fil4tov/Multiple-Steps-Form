import React, { type SelectHTMLAttributes } from 'react'
import { classNames } from '../../../utils/helpers'
import { InputLabel } from '../InputLabel/InputLabel'
import { TipMessage } from '../TipMessage/TipMessage'
import styles from './Select.module.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
  label?: string
  error?: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { className, children, label, error, ...otherProps } = props

  return (
    <label className={classNames(['label', className])}>
      {label && <InputLabel text={label}/>}
      <select
        ref={ref}
        className={classNames(['inputBase', styles.Select])}
        {...otherProps}
      >
        {children}
      </select>
      {error && <TipMessage message={error}/>}
    </label>
  )
})
