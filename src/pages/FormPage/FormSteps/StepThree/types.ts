import { type FormStepState } from '../../../../utils/types'

export interface StepThreeValues {
  about: string
}

export interface StepThreeState extends FormStepState {
  values: StepThreeValues
}
