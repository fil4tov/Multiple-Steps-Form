import { Fragment } from 'react'
import { type FC } from 'react'
import { classNames } from 'utils/helpers'
import styles from './ProgressBar.module.css'
import { Box } from 'components/ui/Box/Box'

interface ProgressBarProps {
  className?: string
  totalSteps: number
  currentStep: number
}

export const ProgressBar: FC<ProgressBarProps> = ({ className, totalSteps, currentStep }) => {
  return (
    <Box
      align='center'
      justify='between'
      className={classNames([styles.ProgressBar, className])}
    >
      {[...new Array(totalSteps)].map((_, i) => (
        <Fragment key={i}>

          {i === 0
            ? null
            : <div className={classNames([styles.line], {
              [styles.lineDone]: i <= currentStep - 1
            })}/>}

          <div className={classNames([styles.circle], {
            [styles.circleCurrent]: i === currentStep - 1,
            [styles.circleDone]: i < currentStep - 1
          })}>
            <span className={classNames([styles.step], {
              [styles.stepDone]: i <= currentStep - 1
            })}>{i + 1}</span>
          </div>

        </Fragment>
      ))}
    </Box>
  )
}
