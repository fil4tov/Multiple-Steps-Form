import { type FC, type ReactNode } from 'react'
import { Box } from 'components/ui'
import { cls } from 'utils/helpers'
import styles from './TooltipIcon.module.scss'

interface TooltipIconProps {
  className?: string
  icon: ReactNode
  isOpen: boolean
}

export const TooltipIcon: FC<TooltipIconProps> = ({ className, icon, isOpen }) => {
  return (
    <Box className={styles.iconContainer}>
      {icon}
      <span className={cls([styles.iconBg, className], {
        [styles.opened]: isOpen
      })}/>
    </Box>
  )
}
