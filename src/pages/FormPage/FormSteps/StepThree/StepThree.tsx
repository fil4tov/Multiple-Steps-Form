import { type FC, useEffect } from 'react'

import { FormButtons } from 'components/'
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
import { getFormLoading, getStepThreeState } from 'store/selectors'

import { type StepThreeValues } from './types'
import { type FormStepProps } from '../types'
import { setIsDone, setValues } from './slice'

export const StepThree: FC<FormStepProps> = ({ currentStep }) => {
  const { values, isDone } = useAppSelector(getStepThreeState)
  const isLoading = useAppSelector(getFormLoading)

  const { form, previousStep, submitForm } = useFormStep<StepThreeValues>({
    values,
    currentStep,
    setIsDone,
    setValues,
    mode: 'onChange'
  })

  const { register, handleSubmit, trigger, watch, formState: { errors, isValid } } = form

  const aboutValueLength = watch('about')?.replace(/\s+/g, '').length

  useEffect(() => {
    if (isDone) void trigger()
  }, [])

  return (
    <form onSubmit={handleSubmit(submitForm)}>
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

      <FormButtons
        isLoading={isLoading}
        isLastStep
        submitDisabled={!isValid || isLoading}
        previousStep={previousStep}
      />
    </form>
  )
}
