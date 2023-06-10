import { type FC, type HTMLAttributes, type ReactNode } from 'react'
import { classNames } from 'utils/helpers'

import styles from './Box.module.scss'
import { type Align, type Direction, type Gap, type Justify } from 'components/ui/types'

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  align?: Align
  justify?: Justify
  direction?: Direction
  gap?: Gap
}

export const Box: FC<BoxProps> = (props) => {
  const {
    align = 'flex-start',
    justify = 'left',
    direction = 'row',
    className,
    children,
    gap,
    ...rest
  } = props

  const alignClass = `align-${align}`
  const justifyClass = `justify-${justify}`
  const directionClass = `direction-${direction}`
  const gapClass = `gap-${gap ?? '1'}`

  return (
    <div
      className={classNames([styles.Box, className], {
        [alignClass]: Boolean(align),
        [justifyClass]: Boolean(justify),
        [directionClass]: Boolean(direction),
        [gapClass]: Boolean(gap)
      })}
      {...rest}
    >
      {children}
    </div>
  )
}
