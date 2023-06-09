import { type FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { type FormStepProps } from '../types'
import { type StepOneValues } from './types'
import { Button, Select, TextField } from '../../../../components/ui'
import { classNames } from '../../../../utils/helpers'
import { useAppSelector, useFormStep } from '../../../../utils/hooks'
import { setValues, setIsDone } from './stepOneSlice'
import { Sex, Tips } from '../../../../utils/consts'
import { getStepOneState } from '../../../../store/selectors'

import styles from '../Steps.module.css'

export const StepOne: FC<FormStepProps> = ({ className, currentStep, totalSteps }) => {
  const { values, isDone } = useAppSelector(getStepOneState)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    trigger
  } = useForm<StepOneValues>({
    mode: 'onBlur',
    defaultValues: values
  })

  const { onSubmit, goBack } = useFormStep<StepOneValues>({
    totalSteps,
    currentStep,
    getValues,
    setIsDone,
    setValues
  })

  useEffect(() => {
    if (isDone) void trigger()
  }, [])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames([styles.form, className])}
    >
      <TextField
        {...register('nickname', {
          required: Tips.REQUIRED,
          maxLength: {
            value: 30,
            message: `${Tips.MAX_LENGTH} 30`
          },
          pattern: {
            value: /^[a-zA-Z0-9]+$/,
            message: Tips.LETTERS_EN_AND_NUMBERS
          }
        })}
        tip={errors?.nickname?.message}
        label="Nickname"
        placeholder="Nickname..."
      />

      <TextField
        {...register('name', {
          required: Tips.REQUIRED,
          maxLength: {
            value: 50,
            message: `${Tips.MAX_LENGTH} 50`
          },
          pattern: {
            value: /^[a-zA-Zа-яА-яёЁ]+$/,
            message: Tips.LETTERS_EN_RU
          }
        })}
        tip={errors?.name?.message}
        label="Name"
        placeholder="Name..."
      />

      <TextField
        {...register('surname', {
          required: Tips.REQUIRED,
          maxLength: {
            value: 50,
            message: `${Tips.MAX_LENGTH} 50`
          },
          pattern: {
            value: /^[a-zA-Zа-яА-яёЁ]+$/,
            message: Tips.LETTERS_EN_RU
          }
        })}
        tip={errors?.surname?.message}
        label="Surname"
        placeholder="Surname..."
      />

      <Select
        {...register('sex', {
          required: Tips.REQUIRED
        })}
        error={errors?.sex?.message}
        label="Sex"
      >
        <option value={Sex.MALE}>{Sex.MALE}</option>
        <option value={Sex.FEMALE}>{Sex.FEMALE}</option>
      </Select>

      <div className={styles.buttons}>
        <Button onClick={goBack} variant='outlined'>Назад</Button>
        <Button disabled={!isValid} type="submit">Далее</Button>
      </div>
    </form>
  )
}
