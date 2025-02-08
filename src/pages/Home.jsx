import React from 'react'
import Hero from '../components/Hero'
import TopCompamies from '../components/TopCompamies'
import LatestJobs from '../components/LatestJobs'

const Home = () => {
  return (
      <section>
        <Hero/>
        <TopCompamies/>
        <LatestJobs/>
      </section>
  )
}

export default Home