import { type FormStepState } from '../FormPage/FormSteps/types'

export interface MainPageValues {
  phone: string
  email: string
}
export interface MainPageState extends FormStepState {
  values: MainPageValues
}
