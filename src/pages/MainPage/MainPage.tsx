import { type FC, useEffect } from 'react'
import { type MainPageValues } from './types'
import { useForm } from 'react-hook-form'
import { UserInfo } from '../../components/UserInfo/UserInfo'
import { Button, TextField } from '../../components/ui'
import { useAppSelector, useFormStep, usePhoneMask } from '../../utils/hooks'
import { Tips } from '../../utils/consts'
import { setIsDone, setValues } from './MainPageSlice'
import { getMainPageState } from '../../store/selectors'
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
        <TextField
          {...register('phone', {
            required: Tips.REQUIRED,
            validate: {
              phone: value => value.replace(/\D/g, '').length >= 11 || Tips.PHONE
            },
            onChange
          })}
          tip={errors?.phone?.message}
          onKeyDown={onKeyDown}
          label="Номер телефона"
          type="tel"
          placeholder="+7 (999) 999-99-99"
        />

        <TextField
          {...register('email', {
            required: Tips.REQUIRED,
            pattern: {
              value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
              message: Tips.EMAIL
            }
          })}
          tip={errors?.email?.message}
          label="Email"
          type="email"
          placeholder="example@mail.com"
        />

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
