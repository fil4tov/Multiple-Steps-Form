import React, { type FC } from 'react'
import styles from './TipMessage.module.css'
import { classNames } from '../../../utils/helpers'

interface TipMessageProps {
  className?: string
  message: string
}

export const TipMessage: FC<TipMessageProps> = ({ className, message }) => {
  return (
    <span className={classNames([styles.TipMessage, className])}>
      {message}
    </span>
  )
}
