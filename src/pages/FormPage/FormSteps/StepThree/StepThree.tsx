import { type FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { type StepThreeValues } from './types'
import { type FormStepProps } from '../types'
import { classNames } from '../../../../utils/helpers'
import { Button, TextArea } from '../../../../components/ui'
import { useAppSelector, useFormStep } from '../../../../utils/hooks'
import { setIsDone, setValues } from './StepThreeSlice'
import { getStateState, getStepThreeState } from '../../../../store/selectors'
import { Tips } from '../../../../utils/consts'

import styles from '../Steps.module.css'

export const StepThree: FC<FormStepProps> = ({ className, currentStep, totalSteps }) => {
  const { values, isDone } = useAppSelector(getStepThreeState)
  const state = useAppSelector(getStateState)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    trigger,
    watch
  } = useForm<StepThreeValues>({
    mode: 'onBlur',
    defaultValues: values
  })

  const aboutValueLength = watch('about')?.replace(/\s+/g, '').length

  const { goBack } = useFormStep<StepThreeValues>({
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
      ...state.stepOne.values,
      ...state.stepTwo.values,
      ...state.mainPage.values,
      ...data
    }
    console.log(allData)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames([styles.form, className])}
    >
      <TextArea
        {...register('about', {
          required: Tips.REQUIRED,
          validate: {
            length: value => value.replace(/\s+/g, '').length <= 200 || `${Tips.MAX_LENGTH} 200`
          }
        })}
        tip={errors?.about?.message}
        counter={String(aboutValueLength)}
        label='About'
        placeholder='Placeholder...'
      />

      <div className={styles.buttons}>
        <Button onClick={goBack} variant='outlined'>Назад</Button>
        <Button type='submit' disabled={!isValid}>Отправить</Button>
      </div>
    </form>
  )
}
