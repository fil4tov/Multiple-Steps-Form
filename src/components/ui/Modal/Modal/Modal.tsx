import { type FC, type MouseEvent, useEffect, useMemo } from 'react'
import { cls } from 'utils/helpers'

import { Box } from '../../'
import { type ModalProps } from '../types'
import { ModalContext } from '../context'
import styles from './Modal.module.scss'

export const Modal: FC<ModalProps> = ({ children, className, isOpen, onClose }) => {
  const store = useMemo(() => ({ onClose }), [])

  const handleClickContent = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const handleCloseOnEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose?.()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleCloseOnEsc)
    }
    return () => document.removeEventListener('keydown', handleCloseOnEsc)
  }, [isOpen])

  return (
    <Box
      justify='center'
      align='center'
      onMouseDown={onClose}
      className={cls([styles.Modal, className], {
        [styles.opened]: isOpen
      })}>
      <Box gap={6} onMouseDown={handleClickContent} className={styles.content}>
        <ModalContext.Provider value={store}>
          {children}
        </ModalContext.Provider>
      </Box>
    </Box>
  )
}
