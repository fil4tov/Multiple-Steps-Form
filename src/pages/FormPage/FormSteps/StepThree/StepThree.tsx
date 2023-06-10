import { type FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import {
  Box,
  Button,
  FormControl,
  FormError,
  FormLabel,
  FormTip,
  TextArea
} from 'components/ui'
import { useAppSelector, useFormStep } from 'utils/hooks'
import { classNames } from 'utils/helpers'
import { Tips } from 'utils/consts'
import { getAllState, getStepThreeState } from 'store/selectors'

import { type StepThreeValues } from './types'
import { type FormStepProps } from '../types'
import { setIsDone, setValues } from './slice'

import styles from '../Steps.module.css'

export const StepThree: FC<FormStepProps> = ({ className, currentStep, totalSteps }) => {
  const { values, isDone } = useAppSelector(getStepThreeState)
  const state = useAppSelector(getAllState)

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
      ...state.mainPage.values,
      ...state.stepOne.values,
      ...state.stepTwo.values,
      ...data
    }
    console.log(allData)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classNames([styles.form, className])}
    >
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

      <Box justify="between" className={styles.buttons}>
        <Button onClick={goBack} variant="outlined">Назад</Button>
        <Button type="submit" disabled={!isValid}>Отправить</Button>
      </Box>
    </form>
  )
}
