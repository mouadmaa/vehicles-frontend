import { Fragment } from 'react'
import { NextPage } from 'next'
import Hero from '@/components/home/hero'
import 'twin.macro'
import Vehicles from '@/components/home/vehicles'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Hero />
      <Vehicles />
    </Fragment>
  )
}

export default Home
