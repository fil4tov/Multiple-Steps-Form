import { type FormStepState } from '../types'

interface Advantage {
  value: string
}

export interface StepTwoValues {
  advantages: Advantage[]
  checkboxGroup: number[]
  radioGroup: number
}

export type StepTwoState = FormStepState<StepTwoValues>
