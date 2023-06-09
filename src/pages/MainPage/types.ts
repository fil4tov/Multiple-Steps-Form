import { type FormStepState } from '../../utils/types'

export interface MainPageValues {
  phone: string
  email: string
}
export interface MainPageState extends FormStepState {
  values: MainPageValues
}
