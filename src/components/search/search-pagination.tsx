import { FC } from 'react'
import { Pagination } from '@nextui-org/react'
import { StyledSearchPagination } from '@/styles/components/search/search-pagination'
import { useStore } from '@/store/store'

const SearchPagination: FC = () => {
  const pagination = useStore(state => state.pagination)

  return (
    <StyledSearchPagination>
      <Pagination
        initialPage={pagination.currentPage}
        total={pagination.lastPage}
        siblings={2}
      />
    </StyledSearchPagination>
  )
}

export default SearchPagination
