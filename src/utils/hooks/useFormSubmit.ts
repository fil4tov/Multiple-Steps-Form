import { reset as resetMainPage } from 'pages/MainPage/slice'
import { reset as resetStepOne } from 'pages/FormPage/FormSteps/StepOne/slice'
import { reset as resetStepTwo } from 'pages/FormPage/FormSteps/StepTwo/slice'
import { reset as resetStepTree } from 'pages/FormPage/FormSteps/StepThree/slice'
import { setCurrentStep, setModalIsOpen } from 'pages/FormPage/slice'
import { useAppDispatch } from 'utils/hooks/useRedux'
import { useNavigate } from 'react-router-dom'

export const useFormSubmit = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const resets = [resetMainPage, resetStepOne, resetStepTwo, resetStepTree]

  const closeModal = () => {
    dispatch(setModalIsOpen(false))
  }

  const onSuccess = () => {
    closeModal()
    navigate('/', { replace: true })
    resets.forEach(reset => dispatch(reset()))
    dispatch(setCurrentStep(0))
  }

  const onFail = () => {
    closeModal()
  }

  return {
    onSuccess,
    onFail,
    closeModal
  }
}
