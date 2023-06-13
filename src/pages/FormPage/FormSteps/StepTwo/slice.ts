import { createSlice } from '@reduxjs/toolkit'
import { type StepTwoState, type StepTwoValues } from './types'
import { getFormReducers } from 'utils/helpers'

const initialState: StepTwoState = {
  values: {
    advantages: [
      { value: '' }, { value: '' }, { value: '' }
    ],
    checkboxGroup: [],
    radioGroup: 0
  },
  isDone: false
}

const slice = createSlice({
  name: 'stepTwo',
  initialState,
  reducers: getFormReducers<StepTwoState, StepTwoValues>(initialState)
})

export const { setValues, setIsDone, reset } = slice.actions
export const stepTwo = slice.reducer
