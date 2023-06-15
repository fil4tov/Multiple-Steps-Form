import { type FC } from 'react'
import { cls } from 'utils/helpers'

import styles from './FormTip.module.scss'
import { type Stick } from '../../types'

interface FormTipProps {
  className?: string
  tip: string
  stick?: Stick
}

export const FormTip: FC<FormTipProps> = ({ className, tip, stick }) => {
  return (
    <span className={cls([styles.FormTip, className], {
      [`margin-${stick}`]: Boolean(stick)
    })}>
      {tip}
    </span>
  )
}
