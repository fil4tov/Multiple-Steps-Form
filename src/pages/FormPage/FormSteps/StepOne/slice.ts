import { createSlice } from '@reduxjs/toolkit'
import { type StepOneState, type StepOneValues } from './types'
import { getFormReducers } from 'utils/helpers'

const initialState: StepOneState = {
  values: {
    nickname: '',
    name: '',
    surname: '',
    sex: ''
  },
  isDone: false
}

const slice = createSlice({
  name: 'stepOne',
  initialState,
  reducers: getFormReducers<StepOneState, StepOneValues>()
})

export const { setValues, setIsDone } = slice.actions
export const stepOne = slice.reducer
