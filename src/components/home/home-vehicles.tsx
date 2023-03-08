import { FC } from 'react'
import Button from '@/components/ui/button'
import VehicleCard from '@/components/vehicle/vehicle-card'
import { StyledHomeVehicles } from '@/styles/components/home/home-vehicles'
import { useStore } from '@/store/store'

const HomeVehicles: FC = () => {
  const vehicles = useStore(state => state.vehicles)

  return (
    <StyledHomeVehicles>
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
    </StyledHomeVehicles>
  )
}

export default HomeVehicles
