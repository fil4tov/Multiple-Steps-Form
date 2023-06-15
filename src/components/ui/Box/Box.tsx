import { type FC, type HTMLAttributes, type ReactNode } from 'react'
import { cls } from 'utils/helpers'

import {
  type Align,
  type Direction,
  type Gap,
  type Justify,
  type Wrap
} from 'components/ui/types'
import styles from './Box.module.scss'

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
  align?: Align
  justify?: Justify
  direction?: Direction
  gap?: Gap
  wrap?: Wrap
}

export const Box: FC<BoxProps> = (props) => {
  const {
    align,
    justify,
    direction,
    gap,
    wrap,
    className,
    children,
    ...rest
  } = props

  return (
    <div
      className={cls([styles.Box, className], {
        [`align-${align}`]: Boolean(align),
        [`justify-${justify}`]: Boolean(justify),
        [`direction-${direction}`]: Boolean(direction),
        [`gap-${gap}`]: Boolean(gap),
        [`${wrap}`]: Boolean(wrap)
      })}
      {...rest}
    >
      {children}
    </div>
  )
}
