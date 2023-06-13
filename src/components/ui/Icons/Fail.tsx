import { type FC, type HTMLAttributes } from 'react'
import { ReactComponent as Icon } from 'assets/icons/fail.svg'

export const Fail: FC<HTMLAttributes<SVGSVGElement>> = (props) => {
  return (
    <Icon {...props} />
  )
}
