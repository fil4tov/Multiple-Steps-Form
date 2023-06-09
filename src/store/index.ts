import { configureStore } from '@reduxjs/toolkit'
import { stepOne } from '../pages/FormPage/FormSteps/StepOne/stepOneSlice'
import { stepTwo } from '../pages/FormPage/FormSteps/StepTwo/StepTwoSlice'
import { stepThree } from '../pages/FormPage/FormSteps/StepThree/StepThreeSlice'
import { mainPage } from '../pages/MainPage/MainPageSlice'
export const store = configureStore({
  reducer: { stepOne, stepTwo, stepThree, mainPage }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
