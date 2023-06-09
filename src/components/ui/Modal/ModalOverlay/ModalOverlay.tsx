import { type FC } from 'react'

import styles from './ModalOverlay.module.css'
import { classNames } from '../../../../utils/helpers'
import { type ModalOverlayProps } from '../types'

export const ModalOverlay: FC<ModalOverlayProps> = ({ className }) => {
  return (
    <div className={classNames([styles.ModalOverlay, className])}/>
  )
}
