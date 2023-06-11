import { type FC } from 'react'
import { Box, Button } from 'components/ui'

import styles from './FormButtons.module.scss'

interface FormButtonsProps {
  submitDisabled: boolean
  previousStep: () => void
}

export const FormButtons: FC<FormButtonsProps> = (props) => {
  const { previousStep, submitDisabled } = props

  return (
    <Box
      className={styles.FormButtons}
      justify='between'
      direction='row'
    >
      <Button onClick={previousStep} variant="outlined">Назад</Button>
      <Button disabled={submitDisabled} type="submit">Далее</Button>
    </Box>
  )
}
