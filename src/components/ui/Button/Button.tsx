import { type ButtonHTMLAttributes, type FC } from 'react'
import { cls } from 'utils/helpers'
import { Loader } from '../'
import styles from './Button.module.scss'

export type Variant = 'filled' | 'outlined' | 'clear'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: Variant
  isLoading?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant = 'filled',
    type = 'button',
    isLoading,
    ...rest
  } = props

  return (
    <button
      {...rest}
      type={type}
      className={cls([styles.Button, styles[variant], className])}
    >
      {isLoading && <Loader className={styles.loader}/>}
      {children}
    </button>
  )
}
