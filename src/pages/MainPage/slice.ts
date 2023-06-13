import { type MainPageState, type MainPageValues } from './types'
import { createSlice } from '@reduxjs/toolkit'
import { getFormReducers } from 'utils/helpers'
import { USER } from 'utils/consts'

const initialState: MainPageState = {
  values: {
    phone: USER.phoneNumber,
    email: USER.email
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
