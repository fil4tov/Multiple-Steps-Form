import { type FC, type HTMLAttributes } from 'react'
import { ReactComponent as Icon } from 'assets/icons/success.svg'

export const Success: FC<HTMLAttributes<SVGSVGElement>> = (props) => {
  return (
    <Icon {...props} />
  )
}
