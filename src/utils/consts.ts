export const userLinks = [
  { social: 'Telegram', link: '/' },
  { social: 'GitHub', link: '/' },
  { social: 'Resume', link: '/' }
]

export const userName = 'Данил Непомнящий'

export enum Sex {
  'MALE' = 'male',
  'FEMALE' = 'female'
}

export const sexOptions: Record<Sex, string> = {
  [Sex.MALE]: 'Male',
  [Sex.FEMALE]: 'Female'
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export enum Tips {
  'REQUIRED' = 'Обязательное поле',
  'MAX_LENGTH' = 'Максимальное кол-во символов',
  'EMAIL' = 'Введите корректный email',
  'PHONE' = 'Введите номер телефона',
  'LETTERS_EN_RU' = 'Только латинские или кириллические буквы',
  'LETTERS_EN_AND_NUMBERS' = 'Только латинские буквы и цифры'
}
