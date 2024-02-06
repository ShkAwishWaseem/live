import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import { secret } from "@/services/authentication";
import { deleteCookie  } from 'cookies-next';
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header";
import Footer from "./Footer";



const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [useremail, setUserEmail] = useState('');
  useEffect(() => {
    try{
      const Token = JSON.parse(localStorage.getItem("token"));
      const decodedToken = jwt.decode(Token, secret);
      const name = decodedToken.name;
      const email = decodedToken.email;
      setUsername(name);
    setUserEmail(email);
    console.log(Token) 
    
  }catch(error){
    console.log(error) 
  }

  }, []);

  const router = useRouter();


  const clickHandler = () => {

      localStorage.removeItem("token");
      deleteCookie ("token");
      toast.success("Logout successfully")
      router.push("/login");
      

  };


  return (
    <>
        <ToastContainer 
    position="top-center"
    
    />
    <Header/>
      <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-[500px] bg-white p-8 rounded-md shadow-md">
          <h1 className="text-center uppercase text-3xl font-bold text-gray-800 mb-6  color" >User Dashboard</h1>
          <p className="text-gray-700 mb-2 font-bold">User name: <span className="links">{username}</span></p>
          <p className="text-gray-700 mb-4 font-bold">User Email: <span className="links">{useremail}</span></p>
          <button
          
            className=" mb-4 w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300"
          >
            <Link href="/add-blogs">
            Add Blogs
            </Link>
          </button>
          <button
            onClick={clickHandler}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
         
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Dashboard;
