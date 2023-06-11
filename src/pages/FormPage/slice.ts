import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  currentStep: -1
}

const slice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload
    }
  }
})

export const { setCurrentStep } = slice.actions
export const form = slice.reducer
