import { type FC } from 'react'
import { Box } from '../../'
import { type ModalFooterProps } from '../types'

export const ModalFooter: FC<ModalFooterProps> = ({ className, children, justify = 'start' }) => {
  return (
    <Box
      className={className}
      gap={3}
      direction='row'
      justify={justify}
    >
      {children}
    </Box>
  )
}
