import { type FC } from 'react'
import { cls, getNameAbbreviation } from 'utils/helpers'
import { UserLink } from '../UserLink/UserLink'
import { USER, userLinks } from 'utils/consts'
import { Box } from 'components/ui'
import styles from './UserInfo.module.scss'

interface UserInfoProps {
  className?: string
}

export const UserInfo: FC<UserInfoProps> = ({ className }) => {
  return (
    <Box
      direction='row'
      gap={6}
      wrap='wrap'
      className={cls([styles.UserInfo, className])}
    >
      <Box justify='center' align='center' className={styles.avatar}>
        <span>{getNameAbbreviation(USER.firstName, USER.lastName)}</span>
      </Box>

      <Box justify='center' gap={2}>
        <p className={styles.name}>{`${USER.firstName} ${USER.lastName}`}</p>
        <ul className={styles.links}>
          {userLinks.map(({ link, social }, i) => (
            <UserLink key={i} text={social} link={link} />
          ))}
        </ul>
      </Box>
    </Box>
  )
}
