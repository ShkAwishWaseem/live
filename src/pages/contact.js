import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Contact from '@/components/Contact';


const contact = () => {

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    window.scroll(0,0)
    

    // Show the success message
    let response = await axios.post(
      "/api/contact",
      {}
  ) 
    setShowSuccess(true);
  };
  
 
  return (
    <>
      <Header/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default contact
