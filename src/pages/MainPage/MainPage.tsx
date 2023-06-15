import { type FC } from 'react'
import { UserInfo } from 'components/'
import {
  Box,
  Button,
  FormControl,
  FormError,
  FormLabel,
  Input
} from 'components/ui'
import { useAppSelector, useFormStep, usePhoneMask } from 'utils/hooks'
import { Tips, regex } from 'utils/consts'

import { getCurrentStep, getMainPageState } from 'store/selectors'
import { type MainPageValues } from './types'
import { setIsDone, setValues } from './slice'

import styles from './MainPage.module.scss'

export const MainPage: FC = () => {
  const formStepState = useAppSelector(getMainPageState)
  const currentStep = useAppSelector(getCurrentStep)
  const { onChange, onKeyDown } = usePhoneMask()

  const { form, nextStep } = useFormStep<MainPageValues>({
    formStepState,
    currentStep,
    setIsDone,
    setValues,
    mode: 'onChange'
  })

  const { register, handleSubmit, formState: { errors, isValid } } = form

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
                value: regex.email,
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
          id='button-start'
        >
          {formStepState.isDone ? 'Продолжить' : 'Начать'}
        </Button>
      </form>
    </Box>
  )
}
