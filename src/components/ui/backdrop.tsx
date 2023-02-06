import { FC } from 'react'
import { StyledBackdrop } from '@/styles/components/ui/backdrop'

interface BackdropProps {
  show: boolean
  onHide: () => void
}

const Backdrop: FC<BackdropProps> = props => {
  const { show, onHide } = props
  return <StyledBackdrop show={show} onClick={onHide} />
}

export default Backdrop
