import { type FormStepState } from 'pages/FormPage/FormSteps/types'

export interface StepThreeValues {
  about: string
}

export interface StepThreeState extends FormStepState {
  values: StepThreeValues
}
