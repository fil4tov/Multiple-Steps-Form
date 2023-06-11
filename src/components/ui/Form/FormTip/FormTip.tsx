import { type FC } from 'react'
import { cls } from 'utils/helpers'

import styles from './FormTip.module.scss'
import { type Stick } from 'components/ui/types'

interface FormTipProps {
  className?: string
  tip: string
  stick?: Stick
}

export const FormTip: FC<FormTipProps> = ({ className, tip, stick }) => {
  const marginClass = `margin-${stick ?? ''}`

  return (
    <span className={cls([styles.FormTip, className], {
      [marginClass]: Boolean(stick)
    })}>
      {tip}
    </span>
  )
}
