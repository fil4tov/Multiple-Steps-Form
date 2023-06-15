import { type FC } from 'react'
import { cls } from 'utils/helpers'

import { useFormControlContext } from '../FormControl/FormControl'
import styles from './FormLabel.module.scss'

interface FormLabelProps {
  text: string
  className?: string
}

export const FormLabel: FC<FormLabelProps> = ({ className, text }) => {
  const { isRequired } = useFormControlContext()

  return (
    <label className={cls([styles.FormLabel, className])}>
      {text}
      {isRequired && <span className={styles.required}>*</span>}
    </label>
  )
}
