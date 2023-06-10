import { type FC } from 'react'
import { classNames } from 'utils/helpers'
import { type ModalBodyProps } from '../types'
import styles from './ModalBody.module.css'

export const ModalBody: FC<ModalBodyProps> = ({ className, children, justify = 'left' }) => {
  const justifyClass = `justify-${justify}`

  return (
    <div className={classNames([styles.ModalBody, className], {
      [justifyClass]: Boolean(justify)
    })}>
      {children}
    </div>
  )
}
