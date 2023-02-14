import { FC, useState } from 'react'
import {
  StyledHeroSearch,
  StyledHeroSearchTab,
} from '@/styles/components/home/hero-search'
import Button from '@/components/ui/button'
import { useRouter } from 'next/router'

const HeroSearch: FC = () => {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState('rent')
  const [location, setLocation] = useState('Larache, Morocco')
  const [when, setWhen] = useState('Select Rent Date')

  const handleSearch = () => {
    router.push('/search/slug')
  }

  const options = ['rent', 'buy', 'sell']

  return (
    <StyledHeroSearch>
      <div>
        {options.map(option => (
          <StyledHeroSearchTab
            key={option}
            active={selectedOption === option}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </StyledHeroSearchTab>
        ))}
      </div>

      <div>
        <label>
          <span>Location</span>
          <input
            type="text"
            value={location}
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <div />
        <label>
          <span>When</span>
          <input
            type="text"
            value={when}
            onChange={event => setWhen(event.target.value)}
          />
        </label>
        <div />
        <div>
          <Button variant="Primary" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
    </StyledHeroSearch>
  )
}

export default HeroSearch
