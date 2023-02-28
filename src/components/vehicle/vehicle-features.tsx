import { FC } from 'react'
import { StyledVehicleFeatures } from '@/styles/components/vehicle/vehicle-features'
import { useVehicleStore } from '@/store/vehicle/slice'

const VehicleFeatures: FC = () => {
  const { vehicle } = useVehicleStore()

  const { model, brand, year, features } = vehicle

  return (
    <StyledVehicleFeatures>
      <h4>Top Features & Specs</h4>
      <div>
        <div>
          <span>Brand</span>
          <span>{brand}</span>
        </div>
        <div>
          <span>Model</span>
          <span>{model}</span>
        </div>
        <div>
          <span>Generation</span>
          <span>{year}</span>
        </div>
        <div>
          <span>City</span>
          <span>Larache</span>
        </div>
        <div>
          <span>Transmission</span>
          <span>{features.transmission}</span>
        </div>
        <div>
          <span>Fuel type</span>
          <span>{features.fuelType}</span>
        </div>
        <div>
          <span>Exterior color</span>
          <span>{features.exteriorColor}</span>
        </div>
        <div>
          <span>Interior color</span>
          <span>{features.interiorColor}</span>
        </div>
        <div>
          <span>Seating Capacity</span>
          <span>{features.seatingCapacity} Seater</span>
        </div>
        <div>
          <span>Options and Packages</span>
          <span>{features.packages} Options</span>
        </div>
        <div>
          <span>Mileage</span>
          <span>{features.mileage} km</span>
        </div>
        <div>
          <span>Engine</span>
          <span>{features.engine}</span>
        </div>
        <div>
          <span>Horsepower</span>
          <span>{features.horsepower} hp</span>
        </div>
        <div>
          <span>MPG</span>
          <span>{features.mpg}</span>
        </div>
        <div>
          <span>Drivetrain</span>
          <span>{features.drivetrain}</span>
        </div>
      </div>
    </StyledVehicleFeatures>
  )
}

export default VehicleFeatures
