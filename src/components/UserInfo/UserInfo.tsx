import { type FC } from 'react'
import { classNames, getNameAbbreviation } from '../../utils/helpers/'
import { UserLink } from '../UserLink/UserLink'
import { userName, userLinks } from '../../utils/consts'
import styles from './UserInfo.module.scss'

interface UserInfoProps {
  className?: string
}

export const UserInfo: FC<UserInfoProps> = ({ className }) => {
  return (
    <div className={classNames([styles.UserInfo, className])}>
      <div className={styles.avatar}>
        <span>{getNameAbbreviation(userName)}</span>
      </div>

      <div className={styles.info}>
        <p className={styles.name}>{userName}</p>
        <ul className={styles.links}>
          {userLinks.map(({ link, social }, i) => (
            <UserLink key={i} text={social} link={link} />
          ))}
        </ul>
      </div>
    </div>
  )
}
