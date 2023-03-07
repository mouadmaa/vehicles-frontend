import { FC } from 'react'
import VehicleCard from '@/components/vehicle/vehicle-card'
import { StyledSearchVehicles } from '@/styles/components/search/search-vehicles'
import { Loading } from '@nextui-org/react'
import { useVehicleStore } from '@/store/vehicle/slice'

const SearchVehicles: FC = () => {
  const { vehicles, loadingVehicles } = useVehicleStore()

  if (loadingVehicles) return <Loading />

  return (
    <StyledSearchVehicles>
      {vehicles.map((vehicle: any) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </StyledSearchVehicles>
  )
}

export default SearchVehicles
