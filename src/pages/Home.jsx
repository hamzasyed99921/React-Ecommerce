import React from 'react'
import Companies from '../components/Elements/Home/Companies'
import Feature from '../components/Elements/Home/Feature'
import Grid from '../components/Elements/Home/Grid'
import Hero from '../components/Elements/Home/Hero'


const Home = () => {
  return (
    <>
      <Hero/>
      <Feature/>
      <Grid/>
      <Companies/>
    </>
  )
}

export default Home