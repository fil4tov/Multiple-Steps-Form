import React, { type InputHTMLAttributes } from 'react'
import { classNames } from '../../../utils/helpers'
import { InputLabel } from '../InputLabel/InputLabel'
import { TipMessage } from '../TipMessage/TipMessage'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label?: string
  tip?: string
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    className,
    label,
    tip,
    ...otherProps
  } = props

  return (
    <label className={classNames(['label', className])}>
      {label && <InputLabel text={label}/>}
      <input
        ref={ref}
        className='inputBase'
        {...otherProps}
      />
      {tip && <TipMessage message={tip}/>}
    </label>
  )
})
