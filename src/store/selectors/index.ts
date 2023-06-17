import { type RootState } from '../index'

export const getStepOneState = (state: RootState) => state.stepOne

export const getStepTwoState = (state: RootState) => state.stepTwo

export const getStepThreeState = (state: RootState) => state.stepThree

export const getMainPageState = (state: RootState) => state.mainPage

export const getAllState = (state: RootState) => state

export const getCurrentStep = (state: RootState) => state.form.currentStep

export const getFormState = (state: RootState) => state.form

export const getFormLoading = (state: RootState) => state.form.isLoading

export const getAllModifiedValues = (state: RootState) => ({
  ...state.mainPage.values,
  ...state.stepOne.values,
  ...state.stepTwo.values,
  ...state.stepThree.values,
  advantages: state.stepTwo.values.advantages?.map(adv => adv.value),
  checkboxGroup: state.stepTwo.values.checkboxGroup.map(item => Number(item)),
  radioGroup: Number(state.stepTwo.values.radioGroup)
})
