import { FC } from 'react'
import { StyledVehicleOrder } from '@/styles/components/vehicle/vehicle-order'
import Button from '@/components/ui/button'
import { formatCurrency } from '@/utils/helpers'
import { useStore } from '@/store/store'

const VehicleOrder: FC = () => {
  const vehicle = useStore(state => state.vehicle)

  return (
    <StyledVehicleOrder>
      <div>
        <small>Rent Price:</small>
        <div>
          <span>{formatCurrency(vehicle.price)}</span>
          <span>/{vehicle.priceBy}</span>
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
