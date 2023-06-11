import { type FC } from 'react'
import { Box } from '../../'
import { type ModalBodyProps } from '../types'

export const ModalBody: FC<ModalBodyProps> = (props) => {
  const {
    className,
    children,
    justify = 'center',
    align = 'center'
  } = props

  return (
    <Box
      className={className}
      align={align}
      justify={justify}
    >
      {children}
    </Box>
  )
}
