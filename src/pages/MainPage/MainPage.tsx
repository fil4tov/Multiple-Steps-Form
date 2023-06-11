import { type FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { UserInfo } from 'components/UserInfo/UserInfo'
import {
  Box,
  Button,
  FormControl,
  FormError,
  FormLabel,
  Input
} from 'components/ui'
import { useAppDispatch, useAppSelector, useFormStep, usePhoneMask } from 'utils/hooks'
import { getCurrentStep, getMainPageState } from 'store/selectors'
import { Tips } from 'utils/consts'

import { type MainPageValues } from './types'
import { setIsDone, setValues } from './slice'

import styles from './MainPage.module.scss'
import { setCurrentStep } from 'pages/FormPage/slice'

export const MainPage: FC = () => {
  const { values, isDone } = useAppSelector(getMainPageState)
  const { onChange, onKeyDown } = usePhoneMask()
  const currentStep = useAppSelector(getCurrentStep)
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    trigger
  } = useForm<MainPageValues>({
    mode: 'onChange',
    defaultValues: values
  })

  const { nextStep } = useFormStep<MainPageValues>({
    totalSteps: 0,
    currentStep,
    getValues,
    setIsDone,
    setValues
  })

  // FOR DEV
  const goToStep = (step: number) => () => {
    dispatch(setCurrentStep(step))
    navigate('/create')
  }

  useEffect(() => {
    if (isDone) void trigger()
  }, [])

  return (
    <Box className={styles.MainPage}>
      <UserInfo/>

      <form onSubmit={handleSubmit(nextStep)}>
        <FormControl isRequired>
          <FormLabel text='Номер телефона'/>
          <Input
            {...register('phone', {
              required: Tips.REQUIRED,
              validate: {
                phone: value => value.replace(/\D/g, '').length >= 11 || Tips.PHONE
              },
              onChange
            })}
            onKeyDown={onKeyDown}
            type="tel"
            placeholder="+7 (999) 999-99-99"
          />
           <FormError text={errors.phone?.message}/>
        </FormControl>

        <FormControl isRequired>
          <FormLabel text='Email'/>
          <Input
            {...register('email', {
              required: Tips.REQUIRED,
              pattern: {
                value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
                message: Tips.EMAIL
              }
            })}
            type="email"
            placeholder="example@mail.com"
          />
          <FormError text={errors.email?.message}/>
        </FormControl>

        <Button
          type="submit"
          className={styles.button}
          disabled={!isValid}
        >
          Начать
        </Button>
      </form>

      <Button onClick={goToStep(0)}>1</Button>
      <Button onClick={goToStep(1)}>2</Button>
      <Button onClick={goToStep(2)}>3</Button>

    </Box>
  )
}
