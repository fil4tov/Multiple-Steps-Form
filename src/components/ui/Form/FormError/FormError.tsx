import { type FC } from 'react'
import { cls } from 'utils/helpers'
import styles from './FormError.module.scss'
import { type Stick } from '../../types'

interface FormErrorProps {
  className?: string
  text: string | undefined
  stick?: Stick
}

export const FormError: FC<FormErrorProps> = ({ className, text, stick }) => {
  return (
    <>
      {text && (
        <span className={cls([styles.FormError, className], {
          [`margin-${stick}`]: Boolean(stick)
        })}>
          {text}
        </span>
      )}
    </>
  )
}
