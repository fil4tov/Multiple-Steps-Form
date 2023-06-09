import { type MainPageState, type MainPageValues } from './types'
import { createSlice } from '@reduxjs/toolkit'
import { getFormReducers } from '../../utils/helpers/'

const initialState: MainPageState = {
  values: {
    phone: '',
    email: ''
  },
  isDone: false
}

const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: getFormReducers<MainPageState, MainPageValues>()
})

export const { setValues, setIsDone } = mainPageSlice.actions
export const mainPage = mainPageSlice.reducer
