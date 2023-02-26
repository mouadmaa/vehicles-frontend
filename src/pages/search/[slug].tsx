import { Fragment } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import VehicleTitle from '@/components/vehicle/vehicle-title'
import VehicleImages from '@/components/vehicle/vehicle-images'
import VehicleFeatures from '@/components/vehicle/vehicle-features'
import { StyledVehicle } from '@/styles/components/pages/search/StyledVehicle'
import VehicleDesc from '@/components/vehicle/vehicle-desc'
import AgencyInfo from '@/components/vehicle/agency-info'
import VehicleOrder from '@/components/vehicle/vehicle-order'
import 'twin.macro'
import { initializeStore } from '@/store/store'

const Vehicle: NextPage = () => {
  return (
    <Fragment>
      <VehicleTitle />

      <StyledVehicle>
        <div>
          <VehicleImages />
          <VehicleFeatures />
          <VehicleDesc />
          <AgencyInfo inMainContent />
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

export const getStaticPaths: GetStaticPaths = async () => {
  const store = initializeStore()

  const vehicles = await store.getState().getVehicles()

  const paths = vehicles.map(vehicle => ({
    params: { slug: vehicle.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const store = initializeStore()
  const slug = params!.slug as string

  await store.getState().getVehicleBySlug(slug)

  return {
    revalidate: 600,
    props: { initialState: JSON.stringify(store.getState()) },
  }
}
