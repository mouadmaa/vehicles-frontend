import { FC, Fragment } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Vehicle } from '@/store/vehicle/types'
import { formatCurrency } from '@/utils/helpers'
import { StyledVehicleCard } from '@/styles/components/vehicle/vehicle-card'
import 'twin.macro'

interface VehicleCardProps {
  isInteractive?: boolean
  vehicle: Vehicle
}

const VehicleCard: FC<VehicleCardProps> = props => {
  const { vehicle, isInteractive = true } = props

  const router = useRouter()

  const handleClick = async () => {
    if (!isInteractive) return
    await router.push(`/search/${vehicle.slug}`)
  }

  const { name, model, brand, price, priceBy, details } = vehicle

  return (
    <StyledVehicleCard
      className={isInteractive ? 'group' : ''}
      isInteractive={isInteractive}
      onClick={handleClick}
    >
      <div>
        <Image
          src={
            'https://res.cloudinary.com/dksfz3vua/image/upload/v1673457410/VEHICLES/oknziaj12hwk4fpcii39_pfpvw6.avif'
          }
          alt={name}
          width={320}
          height={192}
          quality={100}
          tw="group-hover:scale-105"
        />

        <button>
          <HeartSvg />
        </button>
      </div>

      <div>
        <div>
          <div>
            <PopularSvg />
            <span>popular</span>
          </div>

          <div>
            <span>{`${formatCurrency(price)}`}</span>
            <span>{`/${priceBy}`}</span>
          </div>

          <span>{`${brand} ${name} (${model})`}</span>
        </div>

        <div>
          <div>
            <GearboxSvg />
            <span>{details.gearbox}</span>
          </div>

          <div>
            <FuelSvg />
            <span>{details.fuel}</span>
          </div>

          <div>
            <SeatSvg />
            <span>{details.seats}</span>
          </div>
        </div>
      </div>
    </StyledVehicleCard>
  )
}

export default VehicleCard

export const HeartSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg">
    <path d="M2 8.4A5.4 5.4 0 0 1 7.5 3 5.991 5.991 0 0 1 12 5a5.991 5.991 0 0 1 4.5-2A5.4 5.4 0 0 1 22 8.4c0 5.356-6.379 9.4-10 12.6C8.387 17.773 2 13.76 2 8.4Z" />
  </svg>
)

export const PopularSvg = () => (
  <Fragment>
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 1.6a.8.8 0 0 1 .8.8v.8h.8a.8.8 0 1 1 0 1.6h-.8v.8a.8.8 0 0 1-1.6 0v-.8h-.8a.8.8 0 0 1 0-1.6h.8v-.8a.8.8 0 0 1 .8-.8Zm0 8a.8.8 0 0 1 .8.8v.8h.8a.8.8 0 0 1 0 1.6h-.8v.8a.8.8 0 1 1-1.6 0v-.8h-.8a.8.8 0 0 1 0-1.6h.8v-.8a.8.8 0 0 1 .8-.8Zm5.6-8a.8.8 0 0 1 .774.595l.943 3.565L14 7.307a.8.8 0 0 1 0 1.385l-2.683 1.548-.944 3.564a.8.8 0 0 1-1.546 0l-.944-3.564L5.2 8.692a.8.8 0 0 1 0-1.385l2.683-1.548.944-3.564A.8.8 0 0 1 9.6 1.6Z" />
    </svg>
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 24V0h24L12 12 0 24Z" />
    </svg>
  </Fragment>
)

export const GearboxSvg = () => (
  <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.8 10.6C7.7 12.2 5 16.7 5 20.2c0 3.2 3.4 8.5 5.9 9.3 2 .6 2.1 1.3 2.1 18.5s-.1 17.9-2.1 18.5c-2.5.8-5.9 6.1-5.9 9.3C5 81.3 10.6 87 16 87s11-5.7 11-11.2c0-3.2-3.4-8.5-5.9-9.3-1.9-.6-2.1-1.4-2.1-8.1V51h26v7.4c0 6.7-.2 7.5-2.1 8.1-2.5.8-5.9 6.1-5.9 9.3C37 81.3 42.6 87 48 87s11-5.7 11-11.2c0-3.2-3.4-8.5-5.9-9.3-1.9-.6-2.1-1.4-2.1-8.1V51h13.8c13.2 0 14-.1 16-2.3 1.9-2 2.2-3.5 2.2-10.4 0-7.4.2-8.2 2.1-8.8 2.5-.8 5.9-6.1 5.9-9.3C91 14.7 85.4 9 80 9s-11 5.7-11 11.2c0 3.2 3.4 8.5 5.9 9.3 1.9.6 2.1 1.4 2.1 8.1V45H51v-7.4c0-6.7.2-7.5 2.1-8.1 2.5-.8 5.9-6.1 5.9-9.3C59 14.7 53.4 9 48 9s-11 5.7-11 11.2c0 3.2 3.4 8.5 5.9 9.3 1.9.6 2.1 1.4 2.1 8.1V45H19v-7.4c0-6.7.2-7.5 2.1-8.1 2.5-.8 5.9-6.1 5.9-9.3C27 14.6 21.3 8.9 15.8 9c-1.3.1-3.5.7-5 1.6zM74.8 66.6c-3 1.6-5.8 6.1-5.8 9.4 0 5.3 5.7 11 11 11s11-5.7 11-11c0-3.4-2.8-7.8-6-9.5-3.6-1.9-6.7-1.9-10.2.1z" />
  </svg>
)

export const FuelSvg = () => (
  <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.2 2.2C3.3 3.1 3 9.7 3 25.7V48h34V25.7c0-16-.3-22.6-1.2-23.5C34.1.5 5.9.5 4.2 2.2zM30 7.9c1.4 2.7 1.3 13.4-.2 14.9-.7.7-4.4 1.2-9.8 1.2s-9.1-.5-9.8-1.2C8.7 21.3 8.6 10.6 10 7.9 10.9 6.2 12.2 6 20 6s9.1.2 10 1.9zm-7.3 24.3c3 3.4 3.5 5.8 1.8 8.4-3.2 4.9-11.8 1.2-9.9-4.2.8-2.1 4.4-6.4 5.4-6.4.4 0 1.6 1 2.7 2.2z" />
    <path d="M17.4 35.5c-1.3 2-1.4 2.8-.4 4 .7.8 2 1.5 3 1.5s2.3-.7 3-1.5c1-1.2.9-2-.4-4-.9-1.4-2.1-2.5-2.6-2.5s-1.7 1.1-2.6 2.5zM54.6 8.6c-2.2.8-4.2 1.7-4.5 2-.3.3-.8 8.5-1.1 18.2l-.5 17.7H46c-2.3 0-2.5-.4-3-6-.4-5-.8-6-2.5-6.3-1.6-.3-1.8-.1-.7.9.6.7 1.2 3.3 1.2 5.7 0 5.9 1.4 8.2 5 8.2 4.2 0 5-2.3 5-15 0-11.1 0-11.2 3-14 2.1-2 3-3.7 3-6 0-1.9.7-3.8 1.7-4.5 2.5-1.9.2-2.4-4.1-.9zM.4 51.4c-.3.8-.4 2.7-.2 4.3l.3 2.8h39v-8l-19.3-.3C4.2 50 .9 50.2.4 51.4z" />
  </svg>
)

export const SeatSvg = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M35.6 6.2c-.9 1.2-1.6 3.7-1.6 5.5 0 2.9.4 3.4 3 3.9 2.5.5 3 1.1 3 3.5 0 2.7-.3 2.9-3.5 2.9-5.5 0-9.1 2.4-10.9 7.2-5.8 15.5-8.4 29-7.2 36.9.6 3.6 1.4 4.8 4.4 6.7 3.5 2.3 3.9 2.3 9.7 1 7.7-1.7 27.3-1.7 35 0 5.8 1.3 6.2 1.3 9.7-1 3.2-2 3.7-2.9 4.3-7.6.9-6.7.1-12.7-3-23.3-5.2-17.6-6.9-19.9-15-19.9-3.2 0-3.5-.2-3.5-2.9 0-2.4.5-3 3-3.5 2.6-.5 3-1 3-3.9 0-1.8-.7-4.3-1.6-5.5C63 4.1 62.2 4 50 4s-13 .1-14.4 2.2zM56 19v3H44v-6h12v3zm1.2 14c6.9 2 8.8 7.1 10.4 27.7.6 8.8.5 9.3-1.3 9.3-1.7 0-2-1.2-3.2-12.8-1.7-17.8-1.8-18.2-5.7-19.8-4.3-1.8-10.5-1.8-14.8 0-3.9 1.6-4 2-5.7 19.8C35.7 68.8 35.4 70 33.7 70c-1.8 0-1.9-.5-1.3-9.3 1.5-20.1 3.5-25.7 9.9-27.6 4.4-1.3 10.5-1.3 14.9-.1zM11.5 76c-1.5 1.7-1.7 2.8-.9 7.2l.9 5.3 7.3 3.8 7.2 3.8V79.5l-4.4-2.8c-5.1-3.2-7.7-3.4-10.1-.7zM78.3 76.8 74 79.5v16.6l7.3-3.8 7.2-3.8.9-5.3c.8-4.4.6-5.5-.9-7.2-2.4-2.7-5.2-2.5-10.2.8zM35.8 77.2l-5.8 1V96h40V78.3l-6.9-1.2c-8.1-1.3-19.2-1.3-27.3.1z" />
  </svg>
)
