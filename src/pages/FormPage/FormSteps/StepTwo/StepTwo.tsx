import { type FC, Fragment } from 'react'
import { useFieldArray } from 'react-hook-form'

import { FormButtons } from 'components/'
import {
  Box,
  Button,
  Check,
  FormControl,
  FormError,
  FormLabel,
  Input
} from 'components/ui'
import { Delete, Plus } from 'components/ui/Icons'
import { useAppSelector, useFormStep } from 'utils/hooks'
import { checkOptions, Tips } from 'utils/consts'

import { getCurrentStep, getStepTwoState } from 'store/selectors'
import { type StepTwoValues } from './types'
import { setIsDone, setValues } from './slice'

export const StepTwo: FC = () => {
  const formStepState = useAppSelector(getStepTwoState)
  const currentStep = useAppSelector(getCurrentStep)

  const { form, previousStep, nextStep } = useFormStep<StepTwoValues>({
    formStepState,
    currentStep,
    setIsDone,
    setValues,
    mode: 'onChange'
  })

  const { register, control, handleSubmit, formState: { errors, isValid } } = form

  const { fields, append, remove } = useFieldArray({
    name: 'advantages',
    control
  })

  const addInput = () => {
    append({ value: '' })
  }

  const removeInput = (index: number) => () => {
    remove(index)
  }

  return (
    <form onSubmit={handleSubmit(nextStep)}>
      <FormControl isRequired>
        <FormLabel text="Advantages"/>

        {fields.map(({ id }, index, arr) => (
          <Fragment key={id}>
            <Box direction="row">
              <Input
                {...register(`advantages.${index}.value`, {
                  required: Tips.REQUIRED
                })}
                placeholder='Placeholder...'
                id={`field-advantages-${index + 1}`}
              />
              <Button
                disabled={arr.length === 1}
                variant="clear"
                onClick={removeInput(index)}
                id={`button-remove-${index + 1}`}
              >
                <Delete/>
              </Button>
            </Box>
            <FormError text={errors?.advantages?.[index]?.value?.message}/>
          </Fragment>
        ))}

        <Button variant="outlined" onClick={addInput} id='button-add'>
          <Plus/>
        </Button>
      </FormControl>

      <FormControl isRequired>
        <FormLabel text="Checkbox group"/>
        {Object.entries(checkOptions).map(([key, value], index) => (
          <Check
            {...register('checkboxGroup', { required: Tips.REQUIRED })}
            type="checkbox"
            key={key}
            label={key}
            value={value}
            id={`field-checkbox-group-option-${index + 1}`}
          />
        ))}
        <FormError text={errors.checkboxGroup?.message}/>
      </FormControl>

      <FormControl isRequired>
        <FormLabel text="Radio group"/>
        {Object.entries(checkOptions).map(([key, value], index) => (
          <Check
            {...register('radioGroup', { required: Tips.REQUIRED })}
            type="radio"
            key={key}
            label={key}
            value={value}
            id={`field-radio-group-option-${index + 1}`}
          />
        ))}
        <FormError text={errors.radioGroup?.message}/>
      </FormControl>

      <FormButtons submitDisabled={!isValid} previousStep={previousStep}/>
    </form>
  )
}
