import { FC } from 'react'
import Image from 'next/image'
import { StyledHero } from '@/styles/components/home/hero'
import HeroSearch from '@/components/home/hero-search'
import VehicleCard from '@/components/vehicle/vehicle-card'
import { FuelType, PriceBy, Transmission } from '@/store/vehicle/types'

const Hero: FC = () => {
  return (
    <StyledHero>
      <div>
        <Image
          src="/images/home/hero-map.png"
          alt="map"
          width={750}
          height={850}
          quality={100}
          priority={true}
        />
      </div>

      <div>
        <div>
          <h1>
            Buy, rent, or sell <br />
            your vehicles <br />
            easily
          </h1>
          <h5>
            A great platform to buy, sell, or even rent your vehicles without
            any commissions.
          </h5>

          <div>
            <div>
              <span>50k+</span>
              <span>renters</span>
            </div>

            <div>
              <span>10k+</span>
              <span>vehicles</span>
            </div>
          </div>
        </div>

        <HeroSearch />
      </div>

      <div>
        <StartSvg />
        <LineSvg />
        <EndSvg />
      </div>

      <div>
        <VehicleCard isInteractive={false} vehicle={VEHICLES[0]} />
      </div>

      <div>
        <VehicleCard isInteractive={false} vehicle={VEHICLES[1]} />
      </div>

      <div />
    </StyledHero>
  )
}

export default Hero

const VEHICLES: any = [
  {
    model: 'Turbo GT',
    brand: 'Porsche',
    year: '2022',
    coverUrl:
      'https://res.cloudinary.com/dksfz3vua/image/upload/v1673457410/VEHICLES/oknziaj12hwk4fpcii39_pfpvw6.avif',
    price: 3500,
    priceBy: PriceBy.Day,
    features: {
      transmission: Transmission.Automatic,
      fuelType: FuelType.Diesel,
      seatingCapacity: 4,
    },
  },
  {
    model: 'Carrera',
    brand: 'Porsche',
    year: '2023',
    coverUrl:
      'https://res.cloudinary.com/dksfz3vua/image/upload/v1673458343/VEHICLES/porsche-911-carrera-exterior_w9nfoh.png',
    price: 2450,
    priceBy: PriceBy.Hour,
    features: {
      transmission: Transmission.Manual,
      fuelType: FuelType.Gasoline,
      seatingCapacity: 2,
    },
  },
]

const StartSvg = () => (
  <svg width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="27.5" fill="#FAF3F4" stroke="#EF233C" />
    <path
      d="M33.4 27.3a5.4 5.4 0 1 1-10.8 0 5.4 5.4 0 0 1 10.8 0Z"
      fill="#fff"
      stroke="#EF233C"
      strokeWidth="6"
    />
  </svg>
)

const LineSvg = () => (
  <svg
    width="228"
    height="310"
    fill="none"
    viewBox="0 0 228 310"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 1L3.72457 37.7687C3.29913 41.4275 5.42693 44.9039 8.87874 46.1896L218.925 124.424C222.234 125.656 224.344 128.913 224.116 132.437L217.665 232.213C217.328 237.426 212.167 240.923 207.2 239.303L105.274 206.047C101.631 204.858 97.657 206.42 95.7975 209.77L41 308.5"
      stroke="url(#paint0_linear_10_2196)"
      strokeWidth="6"
    />
    <defs>
      <linearGradient
        id="paint0_linear_10_2196"
        x1="49.5"
        y1="331.5"
        x2="5.5"
        y2="1.00002"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EF233C" />
        <stop offset="1" stopColor="#EF233C" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
)

const EndSvg = () => (
  <svg width="56" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#EF233C" />
    <path
      d="M29.732 61c-.77 1.333-2.694 1.333-3.464 0l-3.464-6c-.77-1.333.192-3 1.732-3h6.928c1.54 0 2.502 1.667 1.732 3l-3.464 6Z"
      fill="#EF233C"
    />
    <path
      d="M35.92 22.01c-.2-.59-.76-1.01-1.42-1.01h-11c-.66 0-1.21.42-1.42 1.01l-1.97 5.67c-.07.21-.11.43-.11.66v7.16c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V35h12v.5c0 .82.67 1.5 1.5 1.5.82 0 1.5-.67 1.5-1.5v-7.16c0-.22-.04-.45-.11-.66l-1.97-5.67ZM23.5 32c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5ZM22 27l1.27-3.82c.14-.4.52-.68.95-.68h9.56c.43 0 .81.28.95.68L36 27H22Z"
      fill="#FFF"
    />
  </svg>
)
