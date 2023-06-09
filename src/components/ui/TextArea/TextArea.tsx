import React, { type TextareaHTMLAttributes } from 'react'
import { InputLabel } from '../InputLabel/InputLabel'
import { classNames } from '../../../utils/helpers'
import { TipMessage } from '../TipMessage/TipMessage'
import styles from './TextArea.module.css'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  label?: string
  tip?: string
  counter?: string
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { className, label, tip, counter, ...otherProps } = props

  return (
    <label className={classNames(['label', className])}>
      {label && <InputLabel text={label}/>}

      <textarea ref={ref} className="inputBase" {...otherProps} />

      <div className={styles.tipRow}>
        {tip && <TipMessage message={tip}/>}

        {counter && <TipMessage className={styles.counter} message={counter}/>}
      </div>
    </label>
  )
})
