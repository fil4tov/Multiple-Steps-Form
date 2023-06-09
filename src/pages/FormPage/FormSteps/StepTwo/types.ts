import { type FormStepState } from '../../../../utils/types'

interface Advantage {
  value: string
  id?: string
}

export interface StepTwoValues {
  advantages: Advantage[]
  checkboxGroup: number[]
  radioGroup: number
}

export interface StepTwoState extends FormStepState {
  values: StepTwoValues
}
