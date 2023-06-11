import React, { type FC } from 'react'
import { type ModalHeaderProps } from '../types'
import { Box } from 'components/ui/Box/Box'
import styles from './ModalHeader.module.scss'

export const ModalHeader: FC<ModalHeaderProps> = ({ className, title, justify = 'start' }) => {
  return (
    <Box
      className={className}
      justify={justify}
      direction="row"
    >
      <h2 className={styles.title}>{title}</h2>
    </Box>
  )
}
