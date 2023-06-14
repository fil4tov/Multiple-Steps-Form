import { type FC, type HTMLAttributes } from 'react'
import { ReactComponent as Icon } from 'assets/icons/plus.svg'

export const Plus: FC<HTMLAttributes<SVGSVGElement>> = (props) => {
  return (
    <Icon {...props} />
  )
}
