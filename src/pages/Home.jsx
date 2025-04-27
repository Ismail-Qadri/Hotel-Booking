import React from 'react'
import LandingPage from '../components/LandingPage'
import FeatureDestination from '../components/FeatureDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
        <LandingPage />
        <FeatureDestination />
        <ExclusiveOffers />
        <Testimonial />
        <NewsLetter />
    </div>
  )
}

export default Home