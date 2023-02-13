import { NextPage } from 'next'
import VehicleTitle from '@/components/vehicle/vehicle-title'
import VehicleImages from '@/components/vehicle/vehicle-images'
import { StyledVehicle } from '@/styles/components/pages/search/StyledVehicle'

const Vehicle: NextPage = () => {
  return (
    <StyledVehicle>
      <VehicleTitle />
      <div>
        <div>
          <VehicleImages />
        </div>

        <div></div>
      </div>
    </StyledVehicle>
  )
}

export default Vehicle
