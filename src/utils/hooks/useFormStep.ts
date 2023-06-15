import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { type ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { type DeepPartial, type Mode, useForm } from 'react-hook-form'

import { useAppDispatch, useAppSelector } from 'utils/hooks/'
import { getAllValues } from 'store/selectors'
import { sendForm, setCurrentStep } from 'pages/FormPage/slice'
import { type FormStepState, type FormStepValues } from 'pages/FormPage/FormSteps/types'

interface UseFormStepProps<T extends FormStepValues> {
  formStepState: FormStepState<T>
  setValues: ActionCreatorWithPayload<T>
  setIsDone: ActionCreatorWithPayload<boolean>
  mode: Mode
  currentStep: number
}

export const useFormStep = <T extends FormStepValues>({
  formStepState: { isDone, values },
  setValues,
  setIsDone,
  currentStep,
  mode
}: UseFormStepProps<T>
) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const allValues = useAppSelector(getAllValues)

  const { getValues, trigger, ...rest } = useForm<T>({
    mode,
    defaultValues: values as DeepPartial<T>
  })

  useEffect(() => {
    if (isDone) void trigger()
  }, [])

  //Предотвращает баг при переходе домой с формы через кнопку назад
  useEffect(() => {
    if (location.pathname === '/') {
      dispatch(setCurrentStep(0))
    }
  }, [location.pathname])

  const nextStep = (data: T) => {
    if (currentStep === 0) {
      navigate('/create')
    }
    saveValues(data)
    dispatch(setCurrentStep(currentStep + 1))
  }

  const previousStep = () => {
    if (currentStep === 1) {
      navigate('/')
    }
    saveValues(getValues())
    dispatch(setCurrentStep(currentStep - 1))
  }

  const submitForm = (data: T) => {
    dispatch(sendForm({
      ...allValues,
      ...data
    }))
  }

  const saveValues = (data: T) => {
    dispatch(setValues(data))
    dispatch(setIsDone(true))
  }

  const form = { getValues, trigger, ...rest }

  return {
    form,
    nextStep,
    previousStep,
    submitForm
  }
}
