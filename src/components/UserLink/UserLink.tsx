import { type FC } from 'react'
import { classNames } from 'utils/helpers'
import styles from 'components/UserLink/UserLink.module.scss'
import folder from '../../assets/icons/folder.svg'

interface UserLinkProps {
  className?: string
  text: string
  link: string
}

export const UserLink: FC<UserLinkProps> = ({ className, text, link }) => {
  return (
    <li className={classNames([styles.UserLink, className])}>
      <img
        className={styles.icon}
        src={folder}
        alt="Иконка папки"
      />
      <a href={link} className={styles.link}>{text}</a>
    </li>
  )
}
