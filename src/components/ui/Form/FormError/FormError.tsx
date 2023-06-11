import { type FC } from 'react'
import { cls } from 'utils/helpers'
import styles from './FormError.module.scss'
import { type Stick } from 'components/ui/types'

interface FormErrorProps {
  className?: string
  text: string | undefined
  stick?: Stick
}

export const FormError: FC<FormErrorProps> = ({ className, text, stick }) => {
  const marginClass = `margin-${stick ?? ''}`

  return (
    <>
      {text && (
        <span className={cls([styles.FormError, className], {
          [marginClass]: Boolean(stick)
        })}>
          {text}
        </span>
      )}
    </>
  )
}
