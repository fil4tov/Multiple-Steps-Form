import { type FC, useEffect } from 'react'
import { FormButtons } from 'components/'
import {
  FormControl,
  FormError,
  FormLabel,
  Input,
  Select
} from 'components/ui'
import { useAppSelector, useFormStep } from 'utils/hooks'
import { sexOptions, Tips } from 'utils/consts'
import { getStepOneState } from 'store/selectors'

import { type FormStepProps } from '../types'
import { type StepOneValues } from './types'
import { setValues, setIsDone } from './slice'

export const StepOne: FC<FormStepProps> = ({ currentStep }) => {
  const { values, isDone } = useAppSelector(getStepOneState)

  const {
    form,
    previousStep,
    nextStep
  } = useFormStep<StepOneValues>({
    values,
    currentStep,
    setIsDone,
    setValues,
    mode: 'onChange'
  })

  const { register, handleSubmit, trigger, formState: { errors, isValid } } = form

  useEffect(() => {
    if (isDone) void trigger()
  }, [])

  return (
    <form onSubmit={handleSubmit(nextStep)}>
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
          {Object.entries(sexOptions).map(([key, value]) => (
            <option key={key} value={key}>{value}</option>
          ))}
        </Select>
        <FormError text={errors.sex?.message}/>
      </FormControl>

      <FormButtons submitDisabled={!isValid} previousStep={previousStep}/>
    </form>
  )
}
