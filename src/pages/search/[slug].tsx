import { Fragment } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import VehicleTitle from '@/components/vehicle/vehicle-title'
import VehicleImages from '@/components/vehicle/vehicle-images'
import VehicleFeatures from '@/components/vehicle/vehicle-features'
import { StyledVehicle } from '@/styles/components/pages/search/vehicle'
import VehicleDesc from '@/components/vehicle/vehicle-desc'
import VehicleAgency from '@/components/vehicle/vehicle-agency'
import VehicleOrder from '@/components/vehicle/vehicle-order'
import { initializeStore } from '@/store/store'
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
          <VehicleAgency inMainContent />
          <section tw="h-screen" />
        </div>

        <div>
          <VehicleAgency />
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
