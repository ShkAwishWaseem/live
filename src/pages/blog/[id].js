import Comments from '@/components/Comments'
import ScrollToTopButton from '@/components/STT'
import Template from '@/components/Template'
import Footer from "@/components/Footer"
import React from 'react'
import Progress from "@/components/Progress"


const Blog = () => {

  return (
    <>  

    <Progress/>
  <Template/>
  <Comments />
  <ScrollToTopButton/>
  <Footer/>
    </> 
  )
}

export default Blog
