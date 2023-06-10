import { type ReactNode } from 'react'
import { type Justify } from '../types'

export interface ModalProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  className?: string
}

export interface ModalOverlayProps {
  className?: string
}

export interface ModalCloseButtonProps {
  className?: string
}

export interface ModalHeaderProps {
  className?: string
  children: string
  justify?: Justify
}

export interface ModalBodyProps {
  className?: string
  children: ReactNode
  justify?: Justify
}

export interface ModalFooterProps {
  className?: string
  children: ReactNode
  justify?: Justify
}
