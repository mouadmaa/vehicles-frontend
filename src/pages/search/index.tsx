import { GetServerSideProps, NextPage } from 'next'
import { StyledSearch } from '@/styles/components/pages/search/StyledSearch'
import VehicleCard from '@/components/vehicle/vehicle-card'
import { useVehicleStore } from '@/store/vehicle/slice'
import { initializeStore } from '@/store/store'
import { Pagination } from '@nextui-org/react'
import 'twin.macro'

const Search: NextPage = () => {
  const { vehicles, pagination } = useVehicleStore()

  return (
    <StyledSearch>
      <div>
        <section>
          {vehicles.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </section>
        <section>
          <Pagination
            initialPage={pagination.currentPage}
            total={pagination.lastPage}
          />
        </section>
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
