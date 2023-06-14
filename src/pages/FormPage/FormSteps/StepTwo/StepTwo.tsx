import { type FC, Fragment, useEffect } from 'react'
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
import { getStepTwoState } from 'store/selectors'

import { type FormStepProps } from '../types'
import { type StepTwoValues } from './types'
import { setIsDone, setValues } from './slice'

export const StepTwo: FC<FormStepProps> = ({ currentStep }) => {
  const { values, isDone } = useAppSelector(getStepTwoState)

  const { form, previousStep, nextStep } = useFormStep<StepTwoValues>({
    values,
    currentStep,
    setIsDone,
    setValues,
    mode: 'onChange'
  })

  const { register, control, handleSubmit, trigger, formState: { errors, isValid } } = form

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

  useEffect(() => {
    if (isDone) void trigger()
  }, [])

  return (
    <form onSubmit={handleSubmit(nextStep)}>
      <FormControl isRequired>
        <FormLabel text="Advantages"/>

        {fields.map((item, index, arr) => (
          <Fragment key={index}>
            <Box direction="row">
              <Input
                {...register(`advantages.${index}.value`, {
                  required: Tips.REQUIRED
                })}
                placeholder={'Placeholder...'}
              />
              <Button
                disabled={arr.length === 1}
                variant="clear"
                onClick={removeInput(index)}
              >
                <Delete/>
              </Button>
            </Box>
            <FormError text={errors?.advantages?.[index]?.value?.message}/>
          </Fragment>
        ))}

        <Button variant="outlined" onClick={addInput}>
          <Plus/>
        </Button>
      </FormControl>

      <FormControl isRequired>
        <FormLabel text="Checkbox group"/>
        {Object.entries(checkOptions).map(([key, value]) => (
          <Check
            type="checkbox"
            key={key}
            label={key}
            value={value}
            {...register('checkboxGroup', { required: Tips.REQUIRED })}
          />
        ))}
        <FormError text={errors.checkboxGroup?.message}/>
      </FormControl>

      <FormControl isRequired>
        <FormLabel text="Radio group"/>
        {Object.entries(checkOptions).map(([key, value]) => (
          <Check
            type="radio"
            key={key}
            label={key}
            value={value}
            {...register('radioGroup', { required: Tips.REQUIRED })}
          />
        ))}
        <FormError text={errors.radioGroup?.message}/>
      </FormControl>

      <FormButtons submitDisabled={!isValid} previousStep={previousStep}/>
    </form>
  )
}
