import { GetServerSideProps, NextPage } from 'next'
import { StyledSearch } from '@/styles/components/pages/search/search'
import { initializeStore } from '@/store/store'
import SearchInput from '@/components/search/search-input'
import SearchVehicles from '@/components/search/search-vehicles'
import SearchPagination from '@/components/search/search-pagination'
import 'twin.macro'

const Search: NextPage = () => {
  return (
    <StyledSearch>
      <div>
        <SearchInput />
        <SearchVehicles />
        <SearchPagination />
        <section tw="h-screen" />
      </div>

      <div>Filter</div>
    </StyledSearch>
  )
}

export default Search

export const getServerSideProps: GetServerSideProps = async () => {
  const store = initializeStore()

  await store.getState().getVehicles()

  return {
    props: { initialState: JSON.stringify(store.getState()) },
  }
}
