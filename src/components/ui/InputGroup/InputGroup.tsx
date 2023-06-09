import { type FC } from 'react'
import { classNames } from '../../../utils/helpers'
import { TextField } from '../TextField/TextField'
import { Button } from '../Button/Button'
import { InputLabel } from '../InputLabel/InputLabel'

import styles from './InputGroup.module.css'

import trash from '../../../assets/icons/delete.svg'
import plus from '../../../assets/icons/plus.svg'

import { type FieldArrayWithId } from 'react-hook-form/dist/types/fieldArray'
import { type UseFormRegister } from 'react-hook-form/dist/types/form'

interface InputGroupProps {
  name: string
  fields: FieldArrayWithId[]
  register: UseFormRegister<any>
  deleteInput: (index: number) => void
  addInput: () => void
  errors?: any
  className?: string
  label?: string
  placeholder?: string
}

export const InputGroup: FC<InputGroupProps> = (props) => {
  const {
    name,
    fields,
    register,
    errors,
    label,
    placeholder = 'Placeholder...',
    className,
    deleteInput,
    addInput
  } = props

  return (
    <fieldset className={classNames([styles.InputGroup, className])}>
       {label && <InputLabel text={label}/>}

       {fields.map((item, i) => (
        <div key={item.id} className={styles.inputRow}>
          <TextField
            {...register(`${name}.${i}.value`, {
              required: {
                value: true,
                message: 'Обязательное поле'
              }
            })}
            tip={errors?.[name]?.[i]?.value?.message}
            placeholder={placeholder}
          />
          <Button
            onClick={() => { deleteInput(i) }}
            className={styles.buttonDelete}
            variant="clear"
          >
             <img className={styles.iconDelete} src={trash} alt="Удалить поле ввода"/>
          </Button>
        </div>
       ))}

       <Button
        onClick={addInput}
        className={styles.add}
        variant="outlined"
       >
        <img src={plus} alt="Добавить поле ввода"/>
       </Button>
    </fieldset>
  )
}
