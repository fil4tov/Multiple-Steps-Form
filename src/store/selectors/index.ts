import { type RootState } from '../index'

export const getStepOneState = (state: RootState) => state.stepOne

export const getStepTwoState = (state: RootState) => state.stepTwo

export const getStepThreeState = (state: RootState) => state.stepThree

export const getMainPageState = (state: RootState) => state.mainPage

export const getAllState = (state: RootState) => state

export const getCurrentStep = (state: RootState) => state.form.currentStep

export const getAllValues = (state: RootState) => ({
  ...state.mainPage.values,
  ...state.stepOne.values,
  ...state.stepTwo.values,
  ...state.stepThree.values
})
