import { Fragment, useEffect } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Hero from '@/components/home/hero'
import RecommendedVehicles from '@/components/home/recommended-vehicles'
import { initializeStore } from '@/store/store'
import { useVehicleStore } from '@/store/vehicle/slice'

const Home: NextPage = () => {
  const { vehicles } = useVehicleStore()

  useEffect(() => {
    console.log(vehicles)
  }, [vehicles])

  return (
    <Fragment>
      <Hero />
      <RecommendedVehicles />
    </Fragment>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const store = initializeStore()

  await store.getState().getVehicles()

  return {
    props: { initialState: JSON.stringify(store.getState()) },
  }
}
