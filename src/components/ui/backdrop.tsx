import { FC } from 'react'
import { StyledBackdrop } from '@/styles/components/ui/backdrop'

interface BackdropProps {
  show: boolean
  hide: () => void
}

const Backdrop: FC<BackdropProps> = props => {
  const { show, hide } = props
  return <StyledBackdrop show={show} onClick={hide} />
}

export default Backdrop
