import { Fragment } from 'react'
import { NextPage } from 'next'
import Hero from '@/components/home/hero'
import 'twin.macro'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Hero />
      <section tw="h-screen"></section>
    </Fragment>
  )
}

export default Home
