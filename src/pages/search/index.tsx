import { NextPage } from 'next'
import { shallow } from 'zustand/shallow'
import { useEffect } from 'react'
import { useStore } from '@/store/store'

const Search: NextPage = () => {
  const setData = useStore((state: any) => state.setData, shallow)
  const data = useStore((state: { data: any }) => state.data, shallow)

  useEffect(() => {
    console.log(data)
  }, [data])

  return <h3 onClick={() => setData([])}>Search Page</h3>
}

export default Search
