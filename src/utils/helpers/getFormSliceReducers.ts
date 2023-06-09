import { type PayloadAction } from '@reduxjs/toolkit'
import { type FormStepState, type FormStepValues } from '../types'

export const getFormReducers = <
  State extends FormStepState,
  Payload extends FormStepValues
>() => {
  return {
    setValues: (state: State, action: PayloadAction<Payload>) => {
      state.values = action.payload
    },
    setIsDone: (state: State, action: PayloadAction<boolean>) => {
      state.isDone = action.payload
    }
  }
}
