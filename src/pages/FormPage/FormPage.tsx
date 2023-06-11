import { type FC, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, ProgressBar } from 'components/ui'
import { StepOne, StepTwo, StepThree } from './FormSteps'
import { useAppSelector } from 'utils/hooks'
import { getCurrentStep } from 'store/selectors'
import styles from './FormPage.module.scss'

export const FormPage: FC = () => {
  const currentStep = useAppSelector(getCurrentStep)
  const navigate = useNavigate()

  const formSteps = useMemo(() => {
    return [StepOne, StepTwo, StepThree]
  }, [])

  useEffect(() => {
    if (currentStep === -1) {
      navigate('/', { replace: true })
    }
  }, [currentStep])

  return (
    <Box className={styles.FormPage}>
      <ProgressBar totalSteps={formSteps.length} currentStep={currentStep}/>

      {formSteps.map((FormStep, i, arr) => (
        i === currentStep && <FormStep key={i} totalSteps={arr.length} currentStep={i}/>
      ))}
    </Box>
  )
}
