import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from './redux'
import { type ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { type FieldValues, type UseFormGetValues } from 'react-hook-form'
import { getPreviousStep } from '../helpers'

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
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const prevStep = getPreviousStep(currentStep, totalSteps)

  const onSubmit = (data: T) => {
    saveData(data)
    navigate(`/create/${currentStep + 1}`)
  }

  const saveData = (data: T) => {
    console.log(data)
    dispatch(setValues(data))
    dispatch(setIsDone(true))
  }

  const goBack = () => {
    saveData(getValues())
    navigate(prevStep)
  }

  return {
    onSubmit,
    goBack,
    navigate
  }
}
