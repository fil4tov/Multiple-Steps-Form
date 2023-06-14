import { type FC } from 'react'
import { Plus } from 'components/ui/Icons'
import { cls } from 'utils/helpers'
import { useModalContext } from '../context'
import { type ModalCloseButtonProps } from '../types'
import styles from './ModalCloseButton.module.scss'

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
