import { type MainPageState, type MainPageValues } from './types'
import { createSlice } from '@reduxjs/toolkit'
import { getFormReducers } from 'utils/helpers'

const initialState: MainPageState = {
  values: {
    phone: '',
    email: ''
  },
  isDone: false
}

const slice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: getFormReducers<MainPageState, MainPageValues>(initialState)
})

export const { setValues, setIsDone, reset } = slice.actions
export const mainPage = slice.reducer
