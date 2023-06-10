import { configureStore } from '@reduxjs/toolkit'
import { stepOne } from 'pages/FormPage/FormSteps/StepOne/slice'
import { stepTwo } from 'pages/FormPage/FormSteps/StepTwo/slice'
import { stepThree } from 'pages/FormPage/FormSteps/StepThree/slice'
import { mainPage } from 'pages/MainPage/slice'
export const store = configureStore({
  reducer: { stepOne, stepTwo, stepThree, mainPage }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
