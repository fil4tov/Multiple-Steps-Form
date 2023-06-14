import { type FC } from 'react'
import { Box, Button } from 'components/ui'

import styles from './FormButtons.module.scss'

interface FormButtonsProps {
  submitDisabled: boolean
  previousStep: () => void
  isLastStep?: boolean
  isLoading?: boolean
}

export const FormButtons: FC<FormButtonsProps> = (props) => {
  const { previousStep, submitDisabled, isLastStep, isLoading } = props

  return (
    <Box
      className={styles.FormButtons}
      justify='between'
      direction='row'
    >
      <Button
        onClick={previousStep}
        variant="outlined"
        id='button-back'
      >
        Назад
      </Button>

      <Button
        isLoading={isLoading}
        disabled={submitDisabled}
        type="submit"
        id={isLastStep ? 'button-send' : 'button-next'}
      >
        {isLastStep ? 'Отправить' : 'Далее'}
      </Button>
    </Box>
  )
}
