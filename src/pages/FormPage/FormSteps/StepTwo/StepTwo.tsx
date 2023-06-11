import { type FC, Fragment, useEffect } from 'react'
import {
  useFieldArray,
  useForm
} from 'react-hook-form'

import { FormButtons } from 'components/FormButtons/FormButtons'
import {
  Box,
  Button,
  Check,
  FormControl,
  FormError,
  FormLabel,
  Input
} from 'components/ui'
import { useAppSelector, useFormStep } from 'utils/hooks'
import { checkOptions, Tips } from 'utils/consts'
import { getStepTwoState } from 'store/selectors'

import { type FormStepProps } from '../types'
import { type StepTwoValues } from './types'
import { setIsDone, setValues } from './slice'

import { ReactComponent as Plus } from 'assets/icons/plus.svg'
import { ReactComponent as Delete } from 'assets/icons/delete.svg'

export const StepTwo: FC<FormStepProps> = ({ currentStep, totalSteps }) => {
  const { values, isDone } = useAppSelector(getStepTwoState)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    trigger,
    control
  } = useForm<StepTwoValues>({
    mode: 'onChange',
    defaultValues: values
  })

  const { previousStep, nextStep } = useFormStep<StepTwoValues>({
    totalSteps,
    currentStep,
    getValues,
    setIsDone,
    setValues
  })

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
