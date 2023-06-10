import React, { type TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <textarea ref={ref} className="inputBase" {...rest} />
  )
})
