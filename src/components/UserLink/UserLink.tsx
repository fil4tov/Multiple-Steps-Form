import { type FC } from 'react'
import { cls } from 'utils/helpers'
import { ReactComponent as Folder } from 'assets/icons/folder.svg'
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
      <a href={link} className={styles.link}>{text}</a>
    </li>
  )
}
