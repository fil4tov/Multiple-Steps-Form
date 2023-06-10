import { type FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import {
  Box,
  Button,
  FormControl,
  FormError,
  FormLabel,
  Input,
  Select
} from 'components/ui'
import { useAppSelector, useFormStep } from 'utils/hooks'
import { classNames } from 'utils/helpers'
import { sexOptions, Tips } from 'utils/consts'
import { getStepOneState } from 'store/selectors'

import { type FormStepProps } from '../types'
import { type StepOneValues } from './types'
import { setValues, setIsDone } from './slice'

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
      <FormControl isRequired>
        <FormLabel text="Nickname"/>
        <Input
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
          placeholder="Nickname..."
        />
        <FormError text={errors?.nickname?.message}/>
      </FormControl>

      <FormControl isRequired>
        <FormLabel text="Name"/>
        <Input
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
          placeholder="Name..."
        />
        <FormError text={errors.name?.message}/>
      </FormControl>

      <FormControl isRequired>
        <FormLabel text="Surname"/>
        <Input
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
          placeholder="Surname..."
        />
        <FormError text={errors.surname?.message}/>
      </FormControl>

      <FormControl isRequired>
        <FormLabel text="Sex"/>
        <Select
          {...register('sex', {
            required: Tips.REQUIRED
          })}
          placeholder="Не выбрано"
        >
          {Object.values(sexOptions).map((value, i) => (
            <option key={i} value={value}>{value}</option>
          ))}
        </Select>
        <FormError text={errors.sex?.message}/>
      </FormControl>

      <Box justify="between" className={styles.buttons}>
        <Button onClick={goBack} variant="outlined">Назад</Button>
        <Button disabled={!isValid} type="submit">Далее</Button>
      </Box>
    </form>
  )
}
