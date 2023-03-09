import { FC } from 'react'
import {
  StyledButtonGroup,
  StyledButtonGroupItem,
} from '@/styles/components/ui/button-group'

interface ButtonGroupProps {
  list: {
    title: string
    value: string
  }[]
  selected: string
  setSelected: (selected: string) => void
}

const ButtonGroup: FC<ButtonGroupProps> = props => {
  const { list, selected, setSelected } = props

  return (
    <StyledButtonGroup>
      {list.map(item => (
        <StyledButtonGroupItem
          key={item.value}
          active={item.value === selected}
          onClick={() => setSelected(item.value)}
        >
          {item.title}
        </StyledButtonGroupItem>
      ))}
    </StyledButtonGroup>
  )
}

export default ButtonGroup
