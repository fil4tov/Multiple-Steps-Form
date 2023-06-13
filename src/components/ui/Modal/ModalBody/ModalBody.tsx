import { type FC } from 'react'
import { Box } from '../../'
import { cls } from 'utils/helpers'
import { type ModalBodyProps } from '../types'
import styles from './ModalBody.module.scss'

export const ModalBody: FC<ModalBodyProps> = (props) => {
  const {
    className,
    children,
    justify = 'center',
    align = 'center'
  } = props

  return (
    <Box
      className={cls([styles.ModalBody, className])}
      align={align}
      justify={justify}
    >
      {children}
    </Box>
  )
}
