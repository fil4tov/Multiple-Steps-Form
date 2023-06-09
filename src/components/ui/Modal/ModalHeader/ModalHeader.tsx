import React, { type FC } from 'react'
import { classNames } from '../../../../utils/helpers'
import { type ModalHeaderProps } from '../types'
import styles from './ModalHeader.module.css'

export const ModalHeader: FC<ModalHeaderProps> = ({ className, children, justify = 'left' }) => {
  const justifyClass = `justify-${justify}`

  return (
    <div className={classNames([styles.ModalHeader, className], {
      [justifyClass]: Boolean(justify)
    })}>
      <h2 className={styles.title}>{children}</h2>
    </div>
  )
}
