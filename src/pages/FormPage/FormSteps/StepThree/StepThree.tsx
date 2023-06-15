import { type FC } from 'react'

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

import { getCurrentStep, getFormLoading, getStepThreeState } from 'store/selectors'
import { type StepThreeValues } from './types'
import { setIsDone, setValues } from './slice'

export const StepThree: FC = () => {
  const stepThreeState = useAppSelector(getStepThreeState)
  const isLoading = useAppSelector(getFormLoading)
  const currentStep = useAppSelector(getCurrentStep)

  const { form, previousStep, submitForm } = useFormStep<StepThreeValues>({
    formStepState: stepThreeState,
    currentStep,
    setIsDone,
    setValues,
    mode: 'onChange'
  })

  const { register, handleSubmit, watch, formState: { errors, isValid } } = form

  const aboutValueLength = watch('about')?.replace(/\s+/g, '').length

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
          id='field-about'
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
