import { FC } from 'react'
import { StyledVehicleOrder } from '@/styles/components/vehicle/vehicle-order'
import Button from '@/components/ui/button'

const VehicleOrder: FC = () => {
  return (
    <StyledVehicleOrder>
      <div>
        <small>Rent Price:</small>
        <div>
          <span>2,450 MAD</span>
          <span>/day</span>
        </div>
      </div>
      <div>
        <label>
          <input type="text" placeholder="Select Move-in Date" />
        </label>
      </div>
      <Button variant="Primary">Send Order</Button>
    </StyledVehicleOrder>
  )
}

export default VehicleOrder
