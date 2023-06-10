import { type FC } from 'react'
import { classNames } from 'utils/helpers'
import { useModalContext } from '../context'
import { type ModalCloseButtonProps } from '../types'
import { ReactComponent as Plus } from '../../../../assets/icons/plus.svg'
import styles from './ModalCloseButton.module.css'

export const ModalCloseButton: FC<ModalCloseButtonProps> = ({ className }) => {
  const { onClose } = useModalContext()

  return (
    <button
      onClick={onClose}
      className={classNames([styles.ModalCloseButton, className])}
    >
      <Plus className={styles.icon} />
    </button>
  )
}
