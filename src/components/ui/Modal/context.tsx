import { createContext } from 'react'
import { type ModalContextState } from './types'

export const ModalContext = createContext<ModalContextState>(
  { onClose: () => {} }
)
