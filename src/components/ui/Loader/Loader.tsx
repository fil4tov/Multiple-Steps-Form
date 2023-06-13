import { type FC } from 'react'
import styles from './Loader.module.scss'
import { cls } from 'utils/helpers'

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <span className={cls([styles.loader, className])}/>
  )
}
