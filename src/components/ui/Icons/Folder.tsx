import { type FC, type HTMLAttributes } from 'react'
import { ReactComponent as Icon } from 'assets/icons/folder.svg'

export const Folder: FC<HTMLAttributes<SVGSVGElement>> = (props) => {
  return (
    <Icon {...props} />
  )
}
