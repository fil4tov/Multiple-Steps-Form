import { type FC } from 'react'
import { classNames } from 'utils/helpers'
import styles from 'components/ui/Form/FormError/FormError.module.scss'
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
        <span className={classNames([styles.FormError, className], {
          [marginClass]: Boolean(stick)
        })}>
          {text}
        </span>
      )}
    </>
  )
}
