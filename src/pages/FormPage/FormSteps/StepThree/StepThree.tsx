import { type FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { FormButtons } from 'components/FormButtons/FormButtons'
import {
  Box,
  FormControl,
  FormError,
  FormLabel,
  FormTip,
  TextArea
} from 'components/ui'
import { useAppSelector, useFormStep } from 'utils/hooks'
import { Tips } from 'utils/consts'
import { getAllValues, getStepThreeState } from 'store/selectors'

import { type StepThreeValues } from './types'
import { type FormStepProps } from '../types'
import { setIsDone, setValues } from './slice'

export const StepThree: FC<FormStepProps> = ({ currentStep, totalSteps }) => {
  const { values, isDone } = useAppSelector(getStepThreeState)
  const state = useAppSelector(getAllValues)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    trigger,
    watch
  } = useForm<StepThreeValues>({
    mode: 'onChange',
    defaultValues: values
  })

  const aboutValueLength = watch('about')?.replace(/\s+/g, '').length

  const { previousStep } = useFormStep<StepThreeValues>({
    totalSteps,
    currentStep,
    getValues,
    setIsDone,
    setValues
  })

  useEffect(() => {
    if (isDone) void trigger()
  }, [])

  const onSubmit = async (data: StepThreeValues) => {
    const allData = {
      ...state,
      ...data
    }
    console.log(allData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired>
        <FormLabel text="About"/>
        <TextArea
          {...register('about', {
            required: Tips.REQUIRED,
            validate: {
              length: value => value.replace(/\s+/g, '').length <= 200 || `${Tips.MAX_LENGTH} 200`
            }
          })}
          placeholder="Placeholder..."
        />
        <Box>
          <FormError text={errors?.about?.message}/>
          <FormTip stick='right' tip={String(aboutValueLength)}/>
        </Box>
      </FormControl>

      <FormButtons submitDisabled={!isValid} previousStep={previousStep}/>
    </form>
  )
}
