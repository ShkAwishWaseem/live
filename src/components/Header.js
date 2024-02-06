import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Progress from './Progress'
import { hasCookie } from 'cookies-next'
import jwt from "jsonwebtoken"
import {secret } from "@/services/authentication"

const Header = () => {
      const [Cookie, setCook ] = useState(false);
      const [name , setName] = useState("")
      useEffect(() => {
            if(hasCookie("token")) {
              const Token = JSON.parse(localStorage.getItem("token"));
              const decodedToken = jwt.decode(Token, secret);
              const user = decodedToken.name;
              setName(user);
              console.log(user)
              setCook(true)
            }
            else{
              setCook(false)
            }
      }, [] )

  return (    
    <>
    <Progress/>
    {Cookie ? 
  ( 
     <nav className="nav shadow dark:bg-gray-800">
    <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">


        <Link href="/" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-900 mx-1.5 sm:mx-6">Home</Link>

        <Link href="contact" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-900 mx-1.5 sm:mx-6">Contact Us</Link>

        <Link href="home" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-900 mx-1.5 sm:mx-6">Blogs</Link>



        <Link href="/open-dashboard" className="text-blue-900 font-bold border-transparent  transition-colors duration-300 transform cursor-pointer  dark:hover:text-gray-200 mx-1.5 sm:mx-6">{name}</Link>

    </div>
</nav>
): 
<nav className="nav shadow dark:bg-gray-800">
    <div className="container flex items-end justify-end p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
<Link href="/login" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-900 mx-1.5 sm:mx-6">Login</Link>

<Link href="/" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-900 mx-1.5 sm:mx-6">Home</Link>

<Link href="/contact" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-900 mx-1.5 sm:mx-6">Contact </Link>


       </div>
       </nav>
  
}
</>
  )
}

export default Header
