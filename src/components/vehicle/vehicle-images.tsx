import { FC } from 'react'
import Image from 'next/image'
import { StyledVehicleImages } from '@/styles/components/vehicle/vehicle-images'

const VehicleImages: FC = () => {
  return (
    <StyledVehicleImages>
      <div>
        <Image
          src="https://res.cloudinary.com/dksfz3vua/image/upload/v1673457410/VEHICLES/oknziaj12hwk4fpcii39_pfpvw6.avif"
          alt="car"
          width={900}
          height={600}
          quality={100}
          priority={true}
        />
      </div>
      <div>
        <Image
          src="https://res.cloudinary.com/dksfz3vua/image/upload/v1673458343/VEHICLES/porsche-911-carrera-exterior_w9nfoh.png"
          alt="car"
          width={400}
          height={200}
          quality={100}
          priority={true}
        />
      </div>
      <div>
        <Image
          src="https://res.cloudinary.com/dksfz3vua/image/upload/v1673457410/VEHICLES/fnbivlaspfxtqfjva5y6_afz2tb.avif"
          alt="car"
          width={400}
          height={200}
          quality={100}
          priority={true}
        />
      </div>
    </StyledVehicleImages>
  )
}

export default VehicleImages
