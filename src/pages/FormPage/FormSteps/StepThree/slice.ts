import { createSlice } from '@reduxjs/toolkit'
import { type StepThreeState, type StepThreeValues } from './types'
import { getFormReducers } from 'utils/helpers'

const initialState: StepThreeState = {
  values: {
    about: ''
  },
  isDone: false
}

const slice = createSlice({
  name: 'stepThree',
  initialState,
  reducers: getFormReducers<StepThreeState, StepThreeValues>(initialState)
})

export const { setValues, setIsDone, reset } = slice.actions
export const stepThree = slice.reducer
