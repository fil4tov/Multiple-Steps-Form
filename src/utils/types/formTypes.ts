export type FormStepValues = Record<string, any>

export interface FormStepState {
  values: FormStepValues
  isDone: boolean
}
