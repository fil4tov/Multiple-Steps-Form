import { type FC } from 'react'
import { classNames } from '../../../utils/helpers'

import styles from './InputLabel.module.css'

interface InputLabelProps {
  text: string
  className?: string
}

export const InputLabel: FC<InputLabelProps> = ({ className, text }) => {
  return (
    <span className={classNames([styles.InputLabel, className])}>
      {text}
    </span>
  )
}
