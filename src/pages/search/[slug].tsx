import { Fragment } from 'react'
import { NextPage } from 'next'
import VehicleTitle from '@/components/vehicle/vehicle-title'
import VehicleImages from '@/components/vehicle/vehicle-images'
import VehicleFeatures from '@/components/vehicle/vehicle-features'
import { StyledVehicle } from '@/styles/components/pages/search/StyledVehicle'
import VehicleDesc from '@/components/vehicle/vehicle-desc'
import AgencyInfo from '@/components/vehicle/agency-info'
import VehicleOrder from '@/components/vehicle/vehicle-order'
import 'twin.macro'

const Vehicle: NextPage = () => {
  return (
    <Fragment>
      <VehicleTitle />

      <StyledVehicle>
        <div>
          <VehicleImages />
          <VehicleFeatures />
          <VehicleDesc />
          <section tw="h-screen"></section>
          <section tw="h-screen"></section>
        </div>

        <div>
          <AgencyInfo />
          <VehicleOrder />
        </div>
      </StyledVehicle>
    </Fragment>
  )
}

export default Vehicle
