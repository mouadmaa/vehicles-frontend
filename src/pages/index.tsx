import { Fragment } from 'react'
import { NextPage } from 'next'
import Hero from '@/components/home/hero'
import RecommendedVehicles from '@/components/home/recommended-vehicles'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Hero />
      <RecommendedVehicles />
    </Fragment>
  )
}

export default Home
