// import { type FC } from 'react'
// import { FormButtons } from 'components/'
// import {
//   FormControl,
//   FormError,
//   FormLabel,
//   Input,
//   Select
// } from 'components/ui'
// import { useAppSelector, useFormStep } from 'utils/hooks'
// import { regex, sexOptions, Tips } from 'utils/consts'
//
// import { getCurrentStep, getStepOneState } from 'store/selectors'
// import { type StepOneValues } from './types'
// import { setValues, setIsDone } from './slice'
//
// export const StepOne: FC = () => {
//   const stepOneState = useAppSelector(getStepOneState)
//   const currentStep = useAppSelector(getCurrentStep)
//
//   const {
//     form,
//     previousStep,
//     nextStep
//   } = useFormStep<StepOneValues>({
//     values,
//     isDone,
//     currentStep,
//     setIsDone,
//     setValues,
//     mode: 'onChange'
//   })
//
//   const { register, handleSubmit, formState: { errors, isValid } } = form
//
//   return (
//     <form onSubmit={handleSubmit(nextStep)}>
//       <FormControl isRequired>
//         <FormLabel text="Nickname"/>
//         <Input
//           {...register('nickname', {
//             required: Tips.REQUIRED,
//             maxLength: {
//               value: 30,
//               message: `${Tips.MAX_LENGTH} 30`
//             },
//             pattern: {
//               value: regex.nickname,
//               message: Tips.LETTERS_EN_RU_AND_NUMBERS
//             }
//           })}
//           placeholder="Nickname..."
//           id='field-nickname'
//         />
//         <FormError text={errors?.nickname?.message}/>
//       </FormControl>
//
//       <FormControl isRequired>
//         <FormLabel text="Name"/>
//         <Input
//           {...register('name', {
//             required: Tips.REQUIRED,
//             maxLength: {
//               value: 50,
//               message: `${Tips.MAX_LENGTH} 50`
//             },
//             pattern: {
//               value: regex.name,
//               message: Tips.LETTERS_EN_RU
//             }
//           })}
//           placeholder="Name..."
//           id='field-name'
//         />
//         <FormError text={errors.name?.message}/>
//       </FormControl>
//
//       <FormControl isRequired>
//         <FormLabel text="Surname"/>
//         <Input
//           {...register('surname', {
//             required: Tips.REQUIRED,
//             maxLength: {
//               value: 50,
//               message: `${Tips.MAX_LENGTH} 50`
//             },
//             pattern: {
//               value: regex.surname,
//               message: Tips.LETTERS_EN_RU
//             }
//           })}
//           placeholder="Surname..."
//           id='field-surname'
//         />
//         <FormError text={errors.surname?.message}/>
//       </FormControl>
//
//       <FormControl isRequired>
//         <FormLabel text="Sex"/>
//         <Select
//           {...register('sex', {
//             required: Tips.REQUIRED
//           })}
//           placeholder="Не выбрано"
//           id='field-sex'
//         >
//           {Object.entries(sexOptions).map(([key, value]) => (
//             <option key={key} value={key} id={`field-sex-option-${key}`}>{value}</option>
//           ))}
//         </Select>
//         <FormError text={errors.sex?.message}/>
//       </FormControl>
//
//       <FormButtons submitDisabled={!isValid} previousStep={previousStep}/>
//     </form>
//   )
// }

import { type FC } from 'react'
import { FormButtons } from 'components/'
import {
  FormControl,
  FormError,
  FormLabel,
  Input,
  Select
} from 'components/ui'
import { useAppSelector, useFormStep } from 'utils/hooks'
import { regex, sexOptions, Tips } from 'utils/consts'

import { getCurrentStep, getStepOneState } from 'store/selectors'
import { type StepOneValues } from './types'
import { setValues, setIsDone } from './slice'

export const StepOne: FC = () => {
  const stepOneState = useAppSelector(getStepOneState)
  const currentStep = useAppSelector(getCurrentStep)

  const {
    form,
    previousStep,
    nextStep
  } = useFormStep<StepOneValues>({
    formStepState: stepOneState,
    currentStep,
    setIsDone,
    setValues,
    mode: 'onChange'
  })

  const { register, handleSubmit, formState: { errors, isValid } } = form

  return (
    <form onSubmit={handleSubmit(nextStep)}>
      <FormControl isRequired>
        <FormLabel text="Nickname"/>
        <Input
          {...register('nickname', {
            required: Tips.REQUIRED,
            maxLength: {
              value: 30,
              message: `${Tips.MAX_LENGTH} 30`
            },
            pattern: {
              value: regex.nickname,
              message: Tips.LETTERS_EN_RU_AND_NUMBERS
            }
          })}
          placeholder="Nickname..."
          id='field-nickname'
        />
        <FormError text={errors?.nickname?.message}/>
      </FormControl>

      <FormControl isRequired>
        <FormLabel text="Name"/>
        <Input
          {...register('name', {
            required: Tips.REQUIRED,
            maxLength: {
              value: 50,
              message: `${Tips.MAX_LENGTH} 50`
            },
            pattern: {
              value: regex.name,
              message: Tips.LETTERS_EN_RU
            }
          })}
          placeholder="Name..."
          id='field-name'
        />
        <FormError text={errors.name?.message}/>
      </FormControl>

      <FormControl isRequired>
        <FormLabel text="Surname"/>
        <Input
          {...register('surname', {
            required: Tips.REQUIRED,
            maxLength: {
              value: 50,
              message: `${Tips.MAX_LENGTH} 50`
            },
            pattern: {
              value: regex.surname,
              message: Tips.LETTERS_EN_RU
            }
          })}
          placeholder="Surname..."
          id='field-surname'
        />
        <FormError text={errors.surname?.message}/>
      </FormControl>

      <FormControl isRequired>
        <FormLabel text="Sex"/>
        <Select
          {...register('sex', {
            required: Tips.REQUIRED
          })}
          placeholder="Не выбрано"
          id='field-sex'
        >
          {Object.entries(sexOptions).map(([key, value]) => (
            <option key={key} value={key} id={`field-sex-option-${key}`}>{value}</option>
          ))}
        </Select>
        <FormError text={errors.sex?.message}/>
      </FormControl>

      <FormButtons submitDisabled={!isValid} previousStep={previousStep}/>
    </form>
  )
}
