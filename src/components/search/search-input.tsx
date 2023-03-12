import { ChangeEvent, FC, useState } from 'react'
import { FormElement, Input } from '@nextui-org/react'
import { PrimaryColor } from '@/styles/GlobalStyles'
import { StyledSearchInput } from '@/styles/components/search/search-input'
import { useStore } from '@/store/store'

const SearchInput: FC = () => {
  const getVehicles = useStore(state => state.getVehicles)
  const [searchInput, setSearchInput] = useState('')

  const handleChange = async ({
    target: { value },
  }: ChangeEvent<FormElement>) => {
    setSearchInput(value)
    await getVehicles()
  }

  return (
    <StyledSearchInput>
      <Input
        value={searchInput}
        onChange={handleChange}
        color="primary"
        label="Search"
        placeholder="Search"
        size="sm"
        contentRight={<SearchSvg />}
        clearable
        bordered
      />
    </StyledSearchInput>
  )
}

export default SearchInput

const SearchSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={PrimaryColor}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6115 2C6.30323 2 2 6.20819 2 11.3993C2 16.5903 6.30323 20.7985 11.6115 20.7985C13.8819 20.7985 15.9684 20.0287 17.613 18.7415L20.7371 21.7886L20.8202 21.8586C21.1102 22.0685 21.5214 22.0446 21.7839 21.7873C22.0726 21.5043 22.072 21.0459 21.7825 20.7636L18.6952 17.7523C20.2649 16.0794 21.2231 13.8487 21.2231 11.3993C21.2231 6.20819 16.9198 2 11.6115 2ZM11.6115 3.44774C16.1022 3.44774 19.7426 7.00776 19.7426 11.3993C19.7426 15.7908 16.1022 19.3508 11.6115 19.3508C7.12086 19.3508 3.48044 15.7908 3.48044 11.3993C3.48044 7.00776 7.12086 3.44774 11.6115 3.44774Z"
    />
  </svg>
)
