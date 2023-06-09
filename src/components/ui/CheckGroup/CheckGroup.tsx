import React, { type FC, type ReactNode } from 'react'
import { classNames } from '../../../utils/helpers'

import styles from './CheckGroup.module.css'
import { InputLabel } from '../InputLabel/InputLabel'

interface CheckGroupProps {
  children: ReactNode
  className?: string
  label?: string
}

export const CheckGroup: FC<CheckGroupProps> = ({ className, children, label }) => {
  return (
    <fieldset className={classNames([styles.CheckGroup, className])}>
      {label && <InputLabel text={label}/>}
      {children}
    </fieldset>
  )
}
