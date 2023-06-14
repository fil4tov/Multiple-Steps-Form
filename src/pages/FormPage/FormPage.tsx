import { type FC, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { SuccessTooltip, FailTooltip } from 'components/'
import { Box, ProgressBar } from 'components/ui'
import { useAppSelector, useFormSubmit } from 'utils/hooks'
import { getFormState } from 'store/selectors'
import { StepOne, StepTwo, StepThree } from './FormSteps'
import styles from './FormPage.module.scss'

export const FormPage: FC = () => {
  const { currentStep, modalIsOpen, isSuccess } = useAppSelector(getFormState)
  const { closeModal, onSuccess, onFail } = useFormSubmit()
  const navigate = useNavigate()

  const formSteps = useMemo(() => {
    return [StepOne, StepTwo, StepThree]
  }, [])

  useEffect(() => {
    if (currentStep === 0) {
      navigate('/', { replace: true })
    }
  }, [])

  return (
    <Box className={styles.FormPage}>
      <ProgressBar totalSteps={formSteps.length} currentStep={currentStep}/>

      {formSteps.map((FormStep, i) => (
        i + 1 === currentStep && <FormStep key={i} currentStep={i + 1}/>
      ))}

      {isSuccess
        ? <SuccessTooltip
          title="Форма успешно отправлена"
          buttonText="На главную"
          isOpen={modalIsOpen}
          onAction={onSuccess}
        />
        : <FailTooltip
          title="Ошибка"
          isOpen={modalIsOpen}
          onClose={closeModal}
          onAction={onFail}
        />}
    </Box>
  )
}
