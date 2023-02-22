import { Fragment, useEffect } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Hero from '@/components/home/hero'
import RecommendedVehicles from '@/components/home/recommended-vehicles'
import { useVehicleStore, vehicleStore } from '@/store/vehicle/useVehicleStore'

const Home: NextPage = (props: any) => {
  const { vehicles } = useVehicleStore()

  useEffect(() => {
    console.log(vehicles)
    console.log(props.data)
  }, [props.data, vehicles])

  return (
    <Fragment>
      <Hero />
      <RecommendedVehicles />
    </Fragment>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const store = vehicleStore.getState()

  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()

  store.setVehicles(data)

  return {
    props: {
      data,
    },
  }
}
