import { type FC, useEffect, useMemo, useState } from 'react'
import { ProgressBar } from '../../components/ui'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { StepOne, StepTwo, StepThree } from './FormSteps'
import { getCurrentStep } from '../../utils/helpers'
import styles from './FormPage.module.css'

export const FormPage: FC = () => {
  const location = useLocation()
  const [currentStep, setCurrentStep] = useState(1)

  const formSteps = useMemo(() => {
    return [StepOne, StepTwo, StepThree]
  }, [])

  useEffect(() => {
    const currentStep = getCurrentStep(location.pathname)
    setCurrentStep(currentStep)
  }, [location.pathname])

  return (
    <div className={styles.FormPage}>
      <ProgressBar totalSteps={formSteps.length} currentStep={currentStep}/>

      <Routes>
        {formSteps.map((FormStep, i, arr) => (
          <Route key={i} path={String(i + 1)} element={
            <FormStep totalSteps={arr.length} currentStep={i + 1}/>
          }/>
        ))}
        <Route path="*" element={<Navigate to='/' replace/>}/>
      </Routes>
    </div>
  )
}
