import { FC } from 'react'
import VehicleCard from '@/components/vehicle/vehicle-card'
import { useVehicleStore } from '@/store/vehicle/slice'
import { StyledSearchVehicles } from '@/styles/components/search/search-vehicles'

const SearchVehicles: FC = () => {
  const { vehicles } = useVehicleStore()

  return (
    <StyledSearchVehicles>
      {vehicles.map(vehicle => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </StyledSearchVehicles>
  )
}

export default SearchVehicles
