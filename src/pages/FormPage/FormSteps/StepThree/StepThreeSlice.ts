import { createSlice } from '@reduxjs/toolkit'
import { type StepThreeState, type StepThreeValues } from './types'
import { getFormReducers } from '../../../../utils/helpers'

const initialState: StepThreeState = {
  values: {
    about: ''
  },
  isDone: false
}

const stepThreeSlice = createSlice({
  name: 'stepThree',
  initialState,
  reducers: getFormReducers<StepThreeState, StepThreeValues>()
})

export const { setValues, setIsDone } = stepThreeSlice.actions
export const stepThree = stepThreeSlice.reducer
