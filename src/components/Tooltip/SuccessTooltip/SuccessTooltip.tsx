import { type FC } from 'react'

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from 'components/ui'
import { Success } from 'components/ui/Icons'
import { TooltipIcon } from '../TooltipIcon/TooltipIcon'
import styles from './SuccessTooltip.module.scss'

interface SuccessTooltipProps {
  title: string
  buttonText: string
  isOpen: boolean
  onAction: () => void
  onClose?: () => void
}

export const SuccessTooltip: FC<SuccessTooltipProps> = (props) => {
  const { isOpen, onAction, onClose, title, buttonText } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalHeader justify='center' title={title}/>
      <ModalBody>
        <TooltipIcon
          icon={<Success className={styles.icon}/>}
          isOpen={isOpen}
          className={styles.iconBg}
        />
      </ModalBody>
      <ModalFooter justify='center'>
        <Button onClick={onAction} id='button-to-main'>
          {buttonText}
        </Button>
      </ModalFooter>
    </Modal>
  )
}
