import { type FC, useEffect } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

import { type FormStepProps } from '../types'
import { type StepTwoValues } from './types'
import { Button, Check, CheckGroup, InputGroup } from '../../../../components/ui'
import { classNames } from '../../../../utils/helpers'
import { useAppSelector, useFormStep } from '../../../../utils/hooks'
import { setIsDone, setValues } from './StepTwoSlice'
import { getStepTwoState } from '../../../../store/selectors'
import { Tips } from '../../../../utils/consts'

import styles from '../Steps.module.css'

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

      <InputGroup
        label="Advantages"
        name="advantages"
        fields={fields}
        errors={errors}
        register={register}
        deleteInput={remove}
        addInput={onAdd}
      />

      <CheckGroup label="Checkbox group">
        <Check
          label={1}
          type="checkbox"
          value={1}
          {...register('checkboxGroup', {
            required: Tips.REQUIRED
          })}
        />
        <Check
          label={2}
          type="checkbox"
          value={2}
          {...register('checkboxGroup', {
            required: Tips.REQUIRED
          })}
        />
        <Check
          label={3}
          type="checkbox"
          value={3}
          {...register('checkboxGroup', {
            required: Tips.REQUIRED
          })}
        />
      </CheckGroup>

      <CheckGroup label="Radio group">
        <Check
          label={1}
          type="radio"
          value={1}
          {...register('radioGroup', {
            required: Tips.REQUIRED
          })}
        />
        <Check
          label={2}
          type="radio"
          value={2}
          {...register('radioGroup', {
            required: Tips.REQUIRED
          })}
        />
        <Check
          label={3}
          type="radio"
          value={3}
          {...register('radioGroup', {
            required: Tips.REQUIRED
          })}
        />
      </CheckGroup>

      <div className={styles.buttons}>
        <Button onClick={goBack} variant="outlined">Назад</Button>
        <Button disabled={!isValid} type="submit">Далее</Button>
      </div>
    </form>
  )
}
