import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Progress from '@/components/Progress'

const index = () => {
  return (
    <>
    <Progress/>
      <Header/>
      <Hero/>
      <Content/>
      <Footer/>
    </>
  )
}

export default index
