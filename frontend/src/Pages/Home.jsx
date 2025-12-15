import React from 'react'
import HeroSec from '../Components/HomeComps/HeroSec'
import FeaturedSec from '../Components/HomeComps/FeaturedSec'
import TrustedSec from '../Components/HomeComps/TrustedSec'
import ServiceSec from '../Components/HomeComps/ServiceSec'

const Home = () => {
    return (
        <>
          <HeroSec />
          <FeaturedSec />
          <TrustedSec />
          <ServiceSec />
        </>
    )
}

export default Home