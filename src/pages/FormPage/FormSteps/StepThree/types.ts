import { type FormStepState } from '../types'

export interface StepThreeValues {
  about: string
}

export interface StepThreeState extends FormStepState {
  values: StepThreeValues
}
