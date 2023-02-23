import { Fragment, useEffect } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Hero from '@/components/home/hero'
import RecommendedVehicles from '@/components/home/recommended-vehicles'
import { initializeStore, useStore } from '@/store/store'
import { shallow } from 'zustand/shallow'

const Home: NextPage = () => {
  const data = useStore((state: { data: any }) => state.data, shallow)

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <Fragment>
      <Hero />
      <RecommendedVehicles />
    </Fragment>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const zustandStore = initializeStore()

  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()

  zustandStore.getState().setData(data)

  return {
    props: { initialZustandState: JSON.stringify(zustandStore.getState()) },
  }
}
