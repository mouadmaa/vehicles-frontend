import { FC, useEffect, useState } from 'react'
import ButtonGroup from '@/components/ui/button-group'
import { StyledSearchFilter } from '@/styles/components/search/search-filter'
import Button from '@/components/ui/button'
import InputRange, { Range } from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import { useStore } from '@/store/store'

const SearchFilter: FC = () => {
  const getVehicles = useStore(state => state.getVehicles)

  const [category, setCategory] = useState('all')
  const [price, setPrice] = useState<Range>({ min: 50, max: 900000 })

  useEffect(() => {
    ;(async () => {
      // await getVehicles()
    })()
  }, [getVehicles, category, price])

  const priceRangeLabel = (value: number) => {
    return value >= price.min ? `${value} DH` : `${price.min} DH`
  }

  return (
    <StyledSearchFilter>
      <article>
        <h6>More Filters</h6>
        <Button variant="Tertiary">Reset</Button>
      </article>
      <article>
        <ButtonGroup
          list={buttonGroupList}
          selected={category}
          setSelected={setCategory}
        />
      </article>
      <article>
        <small>Price Range</small>
        <InputRange
          value={price}
          onChange={(value: any) => setPrice(value)}
          formatLabel={priceRangeLabel}
          maxValue={priceRange.max}
          minValue={priceRange.min}
          step={priceRange.step}
        />
      </article>
    </StyledSearchFilter>
  )
}

const priceRange = { min: 50, max: 5000, step: 50 }

const buttonGroupList = [
  { value: 'all', title: 'all' },
  { value: 'rent', title: 'for rent' },
  { value: 'buy', title: 'for buy' },
]

export default SearchFilter
