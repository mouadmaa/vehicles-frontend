import { Fragment } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Hero from '@/components/home/hero'
import RecommendedVehicles from '@/components/home/recommended-vehicles'
import { initializeStore } from '@/store/store'

const Home: NextPage = () => {
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
