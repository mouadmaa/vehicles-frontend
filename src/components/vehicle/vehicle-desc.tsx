import { FC, Fragment, useEffect, useState } from 'react'
import { StyledVehicleDesc } from '@/styles/components/vehicle/vehicle-desc'
import { useVehicleStore } from '@/store/vehicle/slice'

const VehicleDesc: FC = () => {
  const { vehicle } = useVehicleStore()
  const [isServer, setIsServer] = useState(true)

  useEffect(() => {
    setIsServer(false)
  }, [])

  if (isServer || !vehicle.desc) return <Fragment />

  return (
    <StyledVehicleDesc>
      <h4>About this vehicle</h4>
      <p dangerouslySetInnerHTML={{ __html: vehicle.desc }} />
    </StyledVehicleDesc>
  )
}

export default VehicleDesc
