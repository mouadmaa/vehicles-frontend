import { FC } from 'react'
import { StyledVehicleFeatures } from '@/styles/components/vehicle/vehicle-features'

const VehicleFeatures: FC = () => {
  return (
    <StyledVehicleFeatures>
      <h4>Top Features & Specs</h4>
      <div>
        <div>
          <span>Brand</span>
          <span>Porsche</span>
        </div>
        <div>
          <span>Model</span>
          <span>Turbo GT</span>
        </div>
        <div>
          <span>Generation</span>
          <span>2022</span>
        </div>
        <div>
          <span>City</span>
          <span>Larache</span>
        </div>
        <div>
          <span>Transmission</span>
          <span>Automatic</span>
        </div>
        <div>
          <span>Fuel type</span>
          <span>Gasoline</span>
        </div>
        <div>
          <span>Seating Capacity</span>
          <span>5 Seater</span>
        </div>
        <div>
          <span>Mileage</span>
          <span>6,447 km</span>
        </div>
        <div>
          <span>Engine</span>
          <span>1.3L I3 12V GDI DOHC Turbo</span>
        </div>
        <div>
          <span>Exterior color</span>
          <span>Summit Red</span>
        </div>
        <div>
          <span>Interior color</span>
          <span>Jet Black</span>
        </div>
        <div>
          <span>Drivetrain</span>
          <span>All-wheel Drive</span>
        </div>
        <div>
          <span>Horsepower</span>
          <span>354 hp</span>
        </div>
        <div>
          <span>MPG</span>
          <span>29 city / 31 hwy</span>
        </div>
      </div>
    </StyledVehicleFeatures>
  )
}

export default VehicleFeatures
