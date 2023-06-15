import { createContext, type FC, type ReactNode, useContext, useMemo } from 'react'
import { Box } from '../../'

interface FormControlProps {
  children: ReactNode
  className?: string
  isRequired?: boolean
}

interface FormControlState {
  isRequired: boolean | undefined
}

const FormControlContext = createContext<FormControlState>({ isRequired: false })

export const FormControl: FC<FormControlProps> = ({ className, children, isRequired }) => {
  const store = useMemo(() => ({ isRequired }), [])

  return (
    <FormControlContext.Provider value={store}>
      <Box gap={2} className={className}>
        {children}
      </Box>
    </FormControlContext.Provider>
  )
}

export const useFormControlContext = () => {
  return useContext(FormControlContext)
}
