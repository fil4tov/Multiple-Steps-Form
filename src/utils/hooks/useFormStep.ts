import { useAppDispatch } from './redux'
import { type ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { type FieldValues, type UseFormGetValues } from 'react-hook-form'
import { setCurrentStep } from 'pages/FormPage/slice'
import { useNavigate } from 'react-router-dom'

interface UseSaveStepProps<T extends FieldValues> {
  getValues: UseFormGetValues<T>
  setValues: ActionCreatorWithPayload<T>
  setIsDone: ActionCreatorWithPayload<boolean>
  currentStep: number
  totalSteps: number
}

export const useFormStep = <T extends FieldValues> (
  { setValues, getValues, setIsDone, currentStep, totalSteps }: UseSaveStepProps<T>
) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const nextStep = (data: T) => {
    if (currentStep === -1) {
      navigate('/create')
    }
    saveData(data)
    dispatch(setCurrentStep(currentStep + 1))
  }

  const saveData = (data: T) => {
    dispatch(setValues(data))
    dispatch(setIsDone(true))
  }

  const previousStep = () => {
    if (currentStep === 0) {
      navigate('/')
    }
    saveData(getValues())
    dispatch(setCurrentStep(currentStep - 1))
  }

  return {
    nextStep,
    previousStep
  }
}
