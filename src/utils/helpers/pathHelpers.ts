export const getCurrentStep = (path: string): number => {
  const step = path.split('/').at(-1)
  return Number(step)
}

export const getPreviousStep = (currentStep: number, totalSteps: number): string => {
  if (currentStep <= 1 || currentStep > totalSteps) {
    return ('/')
  } else if (currentStep <= totalSteps) {
    return (`/create/${currentStep - 1}`)
  } else {
    return '/'
  }
}
