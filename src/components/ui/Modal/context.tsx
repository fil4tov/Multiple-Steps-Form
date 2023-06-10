import { createContext, useContext } from 'react'

interface ModalContextState {
  onClose: () => void
}

export const ModalContext = createContext<ModalContextState>(
  { onClose: () => {} }
)

export const useModalContext = () => {
  return useContext(ModalContext)
}
