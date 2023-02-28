import { FC } from 'react'
import Image from 'next/image'
import { StyledVehicleImages } from '@/styles/components/vehicle/vehicle-images'
import { useVehicleStore } from '@/store/vehicle/slice'

const VehicleImages: FC = () => {
  const { vehicle } = useVehicleStore()

  const { model, coverUrl } = vehicle

  return (
    <StyledVehicleImages>
      <div>
        <Image
          src={coverUrl}
          alt={model}
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
          width={500}
          height={280}
          quality={100}
          priority={true}
        />
      </div>
      <div>
        <Image
          src="https://res.cloudinary.com/dksfz3vua/image/upload/v1673457410/VEHICLES/fnbivlaspfxtqfjva5y6_afz2tb.avif"
          alt="car"
          width={500}
          height={280}
          quality={100}
          priority={true}
        />
      </div>
    </StyledVehicleImages>
  )
}

export default VehicleImages
