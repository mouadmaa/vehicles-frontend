import { FC } from 'react'
import Image from 'next/image'
import { StyledHero } from '@/styles/components/home/hero'
import HeroSearch from '@/components/home/hero-search'

const Hero: FC = () => {
  return (
    <StyledHero>
      <div>
        <Image
          src="/images/home/hero-map.png"
          alt="map"
          width={750}
          height={850}
          quality={100}
          priority={true}
        />
      </div>

      <div>
        <div>
          <h1>
            Buy, rent, or sell <br />
            your vehicles <br />
            easily
          </h1>
          <h5>
            A great platform to buy, sell, or even rent your vehicles without
            any commissions.
          </h5>

          <div>
            <div>
              <span>50k+</span>
              <span>renters</span>
            </div>

            <div>
              <span>10k+</span>
              <span>vehicles</span>
            </div>
          </div>
        </div>

        <HeroSearch />
      </div>
    </StyledHero>
  )
}

export default Hero
