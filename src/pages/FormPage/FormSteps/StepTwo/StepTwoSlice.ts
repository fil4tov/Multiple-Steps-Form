import { createSlice } from '@reduxjs/toolkit'
import { type StepTwoState, type StepTwoValues } from './types'
import { getFormReducers } from '../../../../utils/helpers'

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

const stepTwoSlice = createSlice({
  name: 'stepTwo',
  initialState,
  reducers: getFormReducers<StepTwoState, StepTwoValues>()
})

export const { setValues, setIsDone } = stepTwoSlice.actions
export const stepTwo = stepTwoSlice.reducer
