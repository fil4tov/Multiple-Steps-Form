import { type ButtonHTMLAttributes, type FC } from 'react'
import { cls } from 'utils/helpers'
import styles from './Button.module.scss'

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
      className={cls([styles.Button, styles[variant], className])}
    >
      {children}
    </button>
  )
}
