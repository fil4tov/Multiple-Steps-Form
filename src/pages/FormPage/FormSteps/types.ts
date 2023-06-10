export interface FormStepProps {
  className?: string
  currentStep: number
  totalSteps: number
}

export type FormStepValues = Record<string, any>

export interface FormStepState {
  values: FormStepValues
  isDone: boolean
}
