import { type FormStepState } from '../FormPage/FormSteps/types'

export interface MainPageValues {
  phone: string
  email: string
}
export type MainPageState = FormStepState<MainPageValues>
