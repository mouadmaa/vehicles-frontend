import { Fragment } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Hero from '@/components/home/hero'
import HomeVehicles from '@/components/home/home-vehicles'
import { initializeStore } from '@/store/store'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Hero />
      <HomeVehicles />
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
