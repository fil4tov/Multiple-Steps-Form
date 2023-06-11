import { type FC } from 'react'
import { cls } from 'utils/helpers'
import { useModalContext } from '../context'
import { type ModalCloseButtonProps } from '../types'
import styles from './ModalCloseButton.module.scss'

import { ReactComponent as Plus } from 'assets/icons/plus.svg'

export const ModalCloseButton: FC<ModalCloseButtonProps> = ({ className }) => {
  const { onClose } = useModalContext()

  return (
    <button
      tabIndex={0}
      onClick={onClose}
      className={cls([styles.ModalCloseButton, className])}
    >
      <Plus className={styles.icon} />
    </button>
  )
}
