import { type FC } from 'react'
import { cls } from 'utils/helpers'
import { Folder } from 'components/ui/Icons'
import styles from './UserLink.module.scss'

interface UserLinkProps {
  className?: string
  text: string
  link: string
}

export const UserLink: FC<UserLinkProps> = ({ className, text, link }) => {
  return (
    <li className={cls([styles.UserLink, className])}>
      <Folder className={styles.icon}/>
      <a href={link} target='_blank' className={styles.link} rel="noreferrer">{text}</a>
    </li>
  )
}
