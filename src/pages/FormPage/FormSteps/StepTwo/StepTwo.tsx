import { type FC, Fragment, useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

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
import { classNames } from 'utils/helpers'
import { Tips } from 'utils/consts'
import { getStepTwoState } from 'store/selectors'

import { type FormStepProps } from '../types'
import { type StepTwoValues } from './types'
import { setIsDone, setValues } from './slice'

import styles from '../Steps.module.css'

import { ReactComponent as Plus } from 'assets/icons/plus.svg'
import { ReactComponent as Delete } from 'assets/icons/delete.svg'

export const StepTwo: FC<FormStepProps> = ({ className, currentStep, totalSteps }) => {
  const { values, isDone } = useAppSelector(getStepTwoState)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    trigger,
    control
  } = useForm<StepTwoValues>({
    mode: 'onBlur',
    defaultValues: values
  })

  const { goBack, onSubmit } = useFormStep<StepTwoValues>({
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

  useEffect(() => {
    if (isDone) void trigger()
  }, [])

  const onAdd = () => append({ value: '' })

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames([styles.form, className])}
    >

      <FormControl isRequired>
        <FormLabel text="Advantages"/>
        {fields.map((item, index, arr) => (
          <Fragment key={index}>
            <Box>
              <Input
                {...register(`advantages.${index}.value`, {
                  required: Tips.REQUIRED
                })}
                placeholder={'Placeholder...'}
              />
              <Button
                disabled={arr.length === 1}
                variant="clear"
                onClick={() => remove(index)}
              >
                <Delete/>
              </Button>
            </Box>
            <FormError text={errors?.advantages?.[index]?.value?.message}/>
          </Fragment>
        ))}
        <Button variant="outlined" onClick={onAdd}>
          <Plus/>
        </Button>
      </FormControl>

      <FormControl isRequired>
        <FormLabel text="Checkbox group"/>
        <Check
          label="1"
          type="checkbox"
          value={1}
          {...register('checkboxGroup', {
            required: Tips.REQUIRED
          })}
        />
        <Check
          label="2"
          type="checkbox"
          value={2}
          {...register('checkboxGroup', {
            required: Tips.REQUIRED
          })}
        />
        <Check
          label="3"
          type="checkbox"
          value={3}
          {...register('checkboxGroup', {
            required: Tips.REQUIRED
          })}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel text="Radio group"/>
        <Check
          label="1"
          type="radio"
          value={1}
          {...register('radioGroup', {
            required: Tips.REQUIRED
          })}
        />
        <Check
          label="2"
          type="radio"
          value={2}
          {...register('radioGroup', {
            required: Tips.REQUIRED
          })}
        />
        <Check
          label="3"
          type="radio"
          value={3}
          {...register('radioGroup', {
            required: Tips.REQUIRED
          })}
        />
      </FormControl>

      <Box justify='between' className={styles.buttons}>
        <Button onClick={goBack} variant="outlined">Назад</Button>
        <Button disabled={!isValid} type="submit">Далее</Button>
      </Box>
    </form>
  )
}
