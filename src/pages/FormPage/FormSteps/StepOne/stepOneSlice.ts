import { createSlice } from '@reduxjs/toolkit'
import { type StepOneState, type StepOneValues } from './types'
import { Sex } from '../../../../utils/consts'
import { getFormReducers } from '../../../../utils/helpers'

const initialState: StepOneState = {
  values: {
    nickname: '',
    name: '',
    surname: '',
    sex: Sex.MALE
  },
  isDone: false
}

const stepOneSlice = createSlice({
  name: 'stepOne',
  initialState,
  reducers: getFormReducers<StepOneState, StepOneValues>()
})

export const { setValues, setIsDone } = stepOneSlice.actions
export const stepOne = stepOneSlice.reducer
