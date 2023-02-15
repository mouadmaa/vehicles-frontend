import { FC } from 'react'
import Button from '@/components/ui/button'
import VehicleCard from '@/components/vehicle/vehicle-card'
import { StyledRecommendedVehicles } from '@/styles/components/home/recommended-vehicles'

const RecommendedVehicles: FC = () => {
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
        {VEHICLES.map((vehicle, index) => (
          <VehicleCard key={index} vehicle={vehicle} />
        ))}
      </div>
      <div>
        <Button variant="Primary">Browse more vehicles</Button>
      </div>
    </StyledRecommendedVehicles>
  )
}

export default RecommendedVehicles

const VEHICLES = [
  {
    name: 'Turbo GT',
    model: '2022',
    brand: 'Porsche',
    cover:
      'https://res.cloudinary.com/dksfz3vua/image/upload/v1673457410/VEHICLES/oknziaj12hwk4fpcii39_pfpvw6.avif',
    price: 3500,
    priceBy: 'day',
    details: {
      gearbox: 'automatic',
      fuel: 'Diesel',
      seats: '4',
    },
  },
  {
    name: 'Carrera',
    model: '2023',
    brand: 'Porsche',
    cover:
      'https://res.cloudinary.com/dksfz3vua/image/upload/v1673458343/VEHICLES/porsche-911-carrera-exterior_w9nfoh.png',
    price: 2450,
    priceBy: 'hour',
    details: {
      gearbox: 'Manual',
      fuel: 'Gasoline',
      seats: '2',
    },
  },
  {
    name: 'Turbo GT',
    model: '2022',
    brand: 'Porsche',
    cover:
      'https://res.cloudinary.com/dksfz3vua/image/upload/v1673457410/VEHICLES/oknziaj12hwk4fpcii39_pfpvw6.avif',
    price: 3500,
    priceBy: 'day',
    details: {
      gearbox: 'automatic',
      fuel: 'Diesel',
      seats: '4',
    },
  },
  {
    name: 'Carrera',
    model: '2023',
    brand: 'Porsche',
    cover:
      'https://res.cloudinary.com/dksfz3vua/image/upload/v1673458343/VEHICLES/porsche-911-carrera-exterior_w9nfoh.png',
    price: 2450,
    priceBy: 'hour',
    details: {
      gearbox: 'Manual',
      fuel: 'Gasoline',
      seats: '2',
    },
  },
  {
    name: 'Turbo GT',
    model: '2022',
    brand: 'Porsche',
    cover:
      'https://res.cloudinary.com/dksfz3vua/image/upload/v1673457410/VEHICLES/oknziaj12hwk4fpcii39_pfpvw6.avif',
    price: 3500,
    priceBy: 'day',
    details: {
      gearbox: 'automatic',
      fuel: 'Diesel',
      seats: '4',
    },
  },
  {
    name: 'Carrera',
    model: '2023',
    brand: 'Porsche',
    cover:
      'https://res.cloudinary.com/dksfz3vua/image/upload/v1673458343/VEHICLES/porsche-911-carrera-exterior_w9nfoh.png',
    price: 2450,
    priceBy: 'hour',
    details: {
      gearbox: 'Manual',
      fuel: 'Gasoline',
      seats: '2',
    },
  },
  {
    name: 'Turbo GT',
    model: '2022',
    brand: 'Porsche',
    cover:
      'https://res.cloudinary.com/dksfz3vua/image/upload/v1673457410/VEHICLES/oknziaj12hwk4fpcii39_pfpvw6.avif',
    price: 3500,
    priceBy: 'day',
    details: {
      gearbox: 'automatic',
      fuel: 'Diesel',
      seats: '4',
    },
  },
  {
    name: 'Carrera',
    model: '2023',
    brand: 'Porsche',
    cover:
      'https://res.cloudinary.com/dksfz3vua/image/upload/v1673458343/VEHICLES/porsche-911-carrera-exterior_w9nfoh.png',
    price: 2450,
    priceBy: 'hour',
    details: {
      gearbox: 'Manual',
      fuel: 'Gasoline',
      seats: '2',
    },
  },
]
