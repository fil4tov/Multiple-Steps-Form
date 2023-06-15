import { type Sex } from 'utils/consts'
import { type FormStepState } from '../types'

export interface StepOneValues {
  nickname: string
  name: string
  surname: string
  sex: '' | Sex
}

export type StepOneState = FormStepState<StepOneValues>
