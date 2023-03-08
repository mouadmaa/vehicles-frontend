import { FC, useState } from 'react'
import ButtonGroup from '@/components/ui/button-group'

const SearchFilter: FC = () => {
  const [category, setCategory] = useState('all')

  return (
    <div>
      <ButtonGroup
        list={buttonGroupList}
        selected={category}
        setSelected={setCategory}
      />
    </div>
  )
}

const buttonGroupList = [
  { value: 'all', title: 'all' },
  { value: 'rent', title: 'for rent' },
  { value: 'buy', title: 'for buy' },
]

export default SearchFilter
