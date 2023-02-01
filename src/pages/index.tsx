import { NextPage } from 'next'
import 'twin.macro'

const Home: NextPage = () => {
  return (
      <div tw="flex flex-col justify-center h-full gap-y-5">
        <h1 tw="text-primary-default text-h1 font-bold underline">
          Hello world!
        </h1>
      </div>
    )
}

export default Home
