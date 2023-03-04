import { FC } from 'react'
import { Pagination } from '@nextui-org/react'
import { useVehicleStore } from '@/store/vehicle/slice'
import { StyledSearchPagination } from '@/styles/components/search/search-pagination'

const SearchPagination: FC = () => {
  const { pagination } = useVehicleStore()

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
