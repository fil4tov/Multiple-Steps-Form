import { type FC } from 'react'

import {
  Button,
  Modal,
  ModalBody, ModalCloseButton,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from 'components/ui'
import { Fail } from 'components/ui/Icons'
import { TooltipIcon } from '../TooltipIcon/TooltipIcon'
import styles from './FailTooltip.module.scss'

interface FailTooltipProps {
  title: string
  isOpen: boolean
  onClose: () => void
  onAction: () => void
}

export const FailTooltip: FC<FailTooltipProps> = (props) => {
  const { isOpen, onClose, onAction, title } = props

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalCloseButton/>
      <ModalHeader justify='start' title={title}/>
      <ModalBody>
        <TooltipIcon
          icon={<Fail className={styles.icon}/>}
          isOpen={isOpen}
          className={styles.iconBg}
        />
      </ModalBody>
      <ModalFooter justify='end'>
        <Button onClick={onAction}>
          Закрыть
        </Button>
      </ModalFooter>
    </Modal>
  )
}
