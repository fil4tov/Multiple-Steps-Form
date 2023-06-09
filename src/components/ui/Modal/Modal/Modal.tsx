import { type FC, type MouseEvent, useEffect, useMemo } from 'react'
import { classNames } from '../../../../utils/helpers'
import { type ModalProps } from '../types'
import { ModalContext } from '../context'
import styles from './Modal.module.css'

export const Modal: FC<ModalProps> = ({ children, className, isOpen, onClose }) => {
  const store = useMemo(() => ({ onClose }), [])

  const handleClickContent = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const handleCloseOnEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleCloseOnEsc)
    }
    return () => document.removeEventListener('keydown', handleCloseOnEsc)
  }, [isOpen])

  return (
    <div onMouseDown={onClose} className={classNames([styles.Modal, className], {
      [styles.opened]: isOpen
    })}>
      <div onMouseDown={handleClickContent} className={styles.content}>
        <ModalContext.Provider value={store}>
          {children}
        </ModalContext.Provider>
      </div>
    </div>
  )
}
