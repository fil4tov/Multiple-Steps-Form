import { type Sex } from '../../../../utils/consts'
import { type FormStepState } from '../../../../utils/types'

export interface StepOneValues {
  nickname: string
  name: string
  surname: string
  sex: Sex
}

export interface StepOneState extends FormStepState {
  values: StepOneValues
}
