import { type FC } from 'react'
import { classNames } from 'utils/helpers'

import styles from 'components/ui/Form/FormTip/FormTip.module.scss'
import { type Stick } from 'components/ui/types'

interface FormTipProps {
  className?: string
  tip: string
  stick?: Stick
}

export const FormTip: FC<FormTipProps> = ({ className, tip, stick }) => {
  const marginClass = `margin-${stick ?? ''}`

  return (
    <span className={classNames([styles.FormTip, className], {
      [marginClass]: Boolean(stick)
    })}>
      {tip}
    </span>
  )
}
