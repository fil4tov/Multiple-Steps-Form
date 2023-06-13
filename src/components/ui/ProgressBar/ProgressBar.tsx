import { Fragment, type FC } from 'react'
import { cls } from 'utils/helpers'
import { Box } from 'components/ui/Box/Box'
import styles from './ProgressBar.module.scss'

interface ProgressBarProps {
  className?: string
  totalSteps: number
  currentStep: number
}

export const ProgressBar: FC<ProgressBarProps> = ({ className, totalSteps, currentStep: step }) => {
  const currentStep = step - 1

  return (
    <Box
      direction='row'
      align='center'
      className={cls([styles.ProgressBar, className])}
    >
      {[...new Array(totalSteps)].map((_, i) => (
        <Fragment key={i}>

          {i === 0
            ? null
            : <div className={cls([styles.line], {
              [styles.filled]: i <= currentStep
            })}/>}

          <div className={cls([styles.circle], {
            [styles.current]: i === currentStep,
            [styles.done]: i < currentStep
          })}>
            <span className={cls([styles.step], {
              [styles.done]: i <= currentStep
            })}>{i + 1}</span>
          </div>

        </Fragment>
      ))}
    </Box>
  )
}
