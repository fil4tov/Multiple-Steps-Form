export enum Tips {
  'REQUIRED' = 'Обязательное поле',
  'MAX_LENGTH' = 'Максимальное кол-во символов',
  'EMAIL' = 'Введите корректный email',
  'PHONE' = 'Введите номер телефона',
  'LETTERS_EN_RU' = 'Только латинские или кириллические буквы',
  'LETTERS_EN_AND_NUMBERS' = 'Только латинские буквы и цифры'
}

export enum Sex {
  'MALE' = 'male',
  'FEMALE' = 'female'
}

enum Check {
  'FIRST_OPTION' = '1',
  'SECOND_OPTION' = '2',
  'THIRD_OPTION' = '3',
}

export const userLinks = [
  { social: 'Telegram', link: 'https://t.me/fil4tov' },
  { social: 'GitHub', link: 'https://github.com/fil4tov' },
  { social: 'Resume', link: '/' }
]

export const USER = {
  firstName: 'Данил',
  lastName: 'Непомнящий',
  phoneNumber: '+7 (916) 667-71-80',
  email: 'idioma@mail.ru'
}

export const BASE_URL = 'https://api.sbercloud.ru'

export const sexOptions: Record<Sex, string> = {
  [Sex.MALE]: 'Male',
  [Sex.FEMALE]: 'Female'
}

export const checkOptions: Record<Check, number> = {
  [Check.FIRST_OPTION]: 1,
  [Check.SECOND_OPTION]: 2,
  [Check.THIRD_OPTION]: 3
}
