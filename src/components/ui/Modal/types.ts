import { type ReactNode } from 'react'
import { type Align, type Justify } from '../types'

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
  title: string
  justify?: Exclude<Justify, 'evenly' | 'between' | 'around'>
}

export interface ModalBodyProps {
  className?: string
  children: ReactNode
  justify?: Justify
  align?: Align
}

export interface ModalFooterProps {
  className?: string
  children: ReactNode
  justify?: Justify
}
