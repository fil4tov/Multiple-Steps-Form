import React, { type InputHTMLAttributes } from 'react'
import { classNames } from 'utils/helpers'
import styles from 'components/ui/Form/Check/Check.module.css'

type Type = 'checkbox' | 'radio'

interface CheckProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label: string
  type: Type
}

export const Check = React.forwardRef<HTMLInputElement, CheckProps>((props, ref) => {
  const { className, label, type, ...otherProps } = props
  return (
    <label className={classNames([styles.label, className])}>
      <input
        ref={ref}
        className={styles.Check}
        type={type}
        {...otherProps}
      />
      <span className={classNames(
        ['check', styles.customCheck, styles[type]]
      )}/>
      <span className={styles.text}>{label}</span>
    </label>
  )
})
