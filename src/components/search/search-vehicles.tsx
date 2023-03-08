import { FC } from 'react'
import VehicleCard from '@/components/vehicle/vehicle-card'
import { StyledSearchVehicles } from '@/styles/components/search/search-vehicles'
import { Loading } from '@nextui-org/react'
import { useStore } from '@/store/store'

const SearchVehicles: FC = () => {
  const { vehicles, loading } = useStore(state => ({
    vehicles: state.vehicles,
    loading: state.loadingVehicles,
  }))

  if (loading) return <Loading />

  return (
    <StyledSearchVehicles>
      {vehicles.map(vehicle => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </StyledSearchVehicles>
  )
}

export default SearchVehicles
