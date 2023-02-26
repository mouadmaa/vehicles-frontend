import { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Button from '@/components/ui/button'
import { StyledAgencyInfo } from '@/styles/components/vehicle/agency-info'
import { useVehicleStore } from '@/store/vehicle/slice'
import 'twin.macro'

interface AgencyInfoProps {
  inMainContent?: boolean
}

const AgencyInfo: FC<AgencyInfoProps> = props => {
  const { inMainContent = false } = props

  const router = useRouter()
  const { vehicle } = useVehicleStore()

  const handleClick = async () => {
    await router.push(`/agency/${vehicle.agency.slug}`)
  }

  const {
    agency: { name, address, coverUrl },
  } = vehicle

  return (
    <StyledAgencyInfo inMainContent={inMainContent}>
      <div className="group" onClick={handleClick}>
        <div>
          <Image
            src={coverUrl || ''}
            alt="agency"
            width={120}
            height={60}
            quality={100}
          />
        </div>
        <div>
          <h3 tw="group-hover:text-primary-default">{name}</h3>
          <p>{address}</p>
        </div>
      </div>
      <div>
        <Button variant="Tertiary">
          <PhoneSvg />
          <span>Phone</span>
        </Button>
        <Button variant="Tertiary">
          <MessageSvg />
          <span>Message</span>
        </Button>
      </div>
    </StyledAgencyInfo>
  )
}

export default AgencyInfo

const PhoneSvg = () => (
  <svg
    tw="group-hover:stroke-white"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5625 15.6C12.5915 17.725 14.3098 19.4389 16.4375 20.4625C16.5944 20.5368 16.768 20.569 16.9412 20.5558C17.1143 20.5427 17.2811 20.4846 17.425 20.3875L20.55 18.3C20.6881 18.2063 20.8476 18.1492 21.0137 18.1339C21.1799 18.1186 21.3472 18.1456 21.5 18.2125L27.35 20.725C27.5499 20.8082 27.717 20.9548 27.8254 21.1423C27.9338 21.3298 27.9776 21.5477 27.95 21.7625C27.7646 23.2097 27.0582 24.5397 25.9631 25.5037C24.8679 26.4677 23.459 26.9997 22 27C17.4913 27 13.1673 25.2089 9.97919 22.0208C6.79107 18.8327 5 14.5087 5 9.99998C5.00033 8.54098 5.53227 7.13208 6.49628 6.03692C7.4603 4.94177 8.79033 4.2354 10.2375 4.04998C10.4523 4.02239 10.6702 4.06617 10.8577 4.17459C11.0452 4.28301 11.1918 4.45004 11.275 4.64998L13.7875 10.5125C13.8528 10.6629 13.8802 10.8271 13.8671 10.9906C13.854 11.1541 13.8009 11.3118 13.7125 11.45L11.625 14.625C11.5321 14.7686 11.4775 14.9336 11.4666 15.1043C11.4556 15.275 11.4887 15.4457 11.5625 15.6V15.6Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MessageSvg = () => (
  <svg
    tw="group-hover:stroke-white"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28 7L16 18L4 7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.8125 16L4.3125 24.7125"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.6875 24.7125L18.1875 16"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
