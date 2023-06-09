import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from '../../../utils/helpers'
import styles from './Button.module.css'

export type Variant = 'filled' | 'outlined' | 'clear'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: Variant
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant = 'filled',
    type = 'button',
    ...otherProps
  } = props

  return (
    <button
      {...otherProps}
      type={type}
      className={classNames([styles.Button, styles[variant], className])}
    >
      {children}
    </button>
  )
}
