import { FC } from 'react'
import Button from '@/components/ui/button'
import VehicleCard from '@/components/vehicle/vehicle-card'
import { StyledRecommendedVehicles } from '@/styles/components/home/recommended-vehicles'
import { useVehicleStore } from '@/store/vehicle/slice'

const RecommendedVehicles: FC = () => {
  const { vehicles } = useVehicleStore()

  return (
    <StyledRecommendedVehicles>
      <div>
        <div>
          <h2>Based on your location</h2>
          <p>Some of our picked vehicles near you location.</p>
        </div>
        <div>
          <Button variant="Primary">Browse more vehicles</Button>
        </div>
      </div>
      <div>
        {vehicles.map(vehicle => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
      <div>
        <Button variant="Primary">Browse more vehicles</Button>
      </div>
    </StyledRecommendedVehicles>
  )
}

export default RecommendedVehicles
