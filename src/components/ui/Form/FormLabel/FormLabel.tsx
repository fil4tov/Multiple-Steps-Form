import { type FC } from 'react'
import { classNames } from 'utils/helpers'

import styles from 'components/ui/Form/FormLabel/FormLabel.module.scss'
import { useFormControlContext } from 'components/ui/Form/FormControl/FormControl'

interface FormLabelProps {
  text: string
  className?: string
}

export const FormLabel: FC<FormLabelProps> = ({ className, text }) => {
  const { isRequired } = useFormControlContext()

  return (
    <label className={classNames([styles.FormLabel, className])}>
      {text}
      {isRequired ? <span className={styles.required}>*</span> : ''}
    </label>
  )
}
