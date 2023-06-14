import { type FC, type HTMLAttributes } from 'react'
import { ReactComponent as Icon } from 'assets/icons/delete.svg'

export const Delete: FC<HTMLAttributes<SVGSVGElement>> = (props) => {
  return (
    <Icon {...props} />
  )
}
