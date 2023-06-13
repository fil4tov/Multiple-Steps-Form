import { type StepOneValues } from 'pages/FormPage/FormSteps/StepOne/types'
import { type StepTwoValues } from 'pages/FormPage/FormSteps/StepTwo/types'
import { type StepThreeValues } from 'pages/FormPage/FormSteps/StepThree/types'
import { type MainPageValues } from 'pages/MainPage/types'

export interface FormPageState {
  currentStep: number
  modalIsOpen: boolean
  isSuccess: boolean
  isLoading: boolean
}

export interface FormValues extends
  StepOneValues,
  Omit<StepTwoValues, 'advantages'>,
  StepThreeValues,
  MainPageValues {
  advantages: string[]
}
