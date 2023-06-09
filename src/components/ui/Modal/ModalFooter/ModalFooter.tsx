import { type FC } from 'react'
import { classNames } from '../../../../utils/helpers'
import { type ModalFooterProps } from '../types'
import styles from './ModalFooter.module.css'

export const ModalFooter: FC<ModalFooterProps> = ({ className, children, justify = 'right' }) => {
  const justifyClass = `justify-${justify}`

  return (
    <div className={classNames([styles.ModalFooter, className], {
      [justifyClass]: Boolean(justify)
    })}>
      {children}
    </div>
  )
}
