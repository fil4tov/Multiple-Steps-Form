import { type FC } from 'react'
import { cls } from 'utils/helpers'
import styles from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <span className={cls([styles.loader, className])}/>
  )
}
