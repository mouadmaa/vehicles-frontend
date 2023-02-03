import { NextPage } from 'next'
import 'twin.macro'

const Home: NextPage = () => {
  return (
    <div>
      <h1 tw="h-screen w-1/3 flex items-center justify-center text-gray-900">
        Hello World
      </h1>
    </div>
  )
}

export default Home
