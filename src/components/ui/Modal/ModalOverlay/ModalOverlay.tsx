import { type FC } from 'react'

import { cls } from 'utils/helpers'
import { type ModalOverlayProps } from '../types'
import styles from './ModalOverlay.module.scss'

export const ModalOverlay: FC<ModalOverlayProps> = ({ className }) => {
  return (
    <div className={cls([styles.ModalOverlay, className])}/>
  )
}
