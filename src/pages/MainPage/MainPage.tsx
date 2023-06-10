import { type FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { UserInfo } from 'components/UserInfo/UserInfo'
import {
  Button,
  FormControl,
  FormError,
  FormLabel,
  Input
} from 'components/ui'
import { useAppSelector, useFormStep, usePhoneMask } from 'utils/hooks'
import { getMainPageState } from 'store/selectors'
import { Tips } from 'utils/consts'

import { type MainPageValues } from './types'
import { setIsDone, setValues } from './slice'

import styles from './MainPage.module.css'

export const MainPage: FC = () => {
  const { values: { phone, email }, isDone } = useAppSelector(getMainPageState)
  const { onChange, onKeyDown } = usePhoneMask()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    getValues
  } = useForm<MainPageValues>({
    mode: 'onBlur'
  })

  const { onSubmit } = useFormStep<MainPageValues>({
    totalSteps: 0,
    currentStep: 0,
    getValues,
    setIsDone,
    setValues
  })

  useEffect(() => {
    if (isDone) {
      setValue('phone', phone, { shouldValidate: true })
      setValue('email', email, { shouldValidate: true })
    }
  }, [])

  return (
    <div className={styles.MainPage}>
      <UserInfo/>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.contacts}>
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
    </div>
  )
}
