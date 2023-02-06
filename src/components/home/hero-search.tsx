import { FC, useState } from 'react'
import {
  StyledHeroSearch,
  StyledHeroSearchButton,
} from '@/styles/components/home/hero-search'
import Button from '@/components/ui/button'

const HeroSearch: FC = () => {
  const [selectedOption, setSelectedOption] = useState('rent')

  const options = ['rent', 'buy', 'sell']

  return (
    <StyledHeroSearch>
      <div>
        {options.map(option => (
          <StyledHeroSearchButton
            key={option}
            active={selectedOption === option}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </StyledHeroSearchButton>
        ))}
      </div>

      <div>
        <label>
          <span>Location</span>
          <input type="text" value="Larache, Morocco" />
        </label>
        <div />
        <label>
          <span>When</span>
          <input type="text" value="Select Rent Date" />
        </label>
        <div />
        <div>
          <Button variant="Primary">Search</Button>
        </div>
      </div>
    </StyledHeroSearch>
  )
}

export default HeroSearch
