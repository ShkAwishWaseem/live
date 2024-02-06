import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';  // Import Axios
import { secret } from '@/services/authentication';
import jwt from "jsonwebtoken"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setCookie } from 'cookies-next';
import Cookies from 'cookies';
import LoadingBar from 'react-top-loading-bar'
import {motion} from "framer-motion"



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loader,  setShowLoader] = useState(false);
  const [progress, setProgress] = useState(0); 
  const router = useRouter();
  


  const handleLogin = async (e) => {
     e.preventDefault();
   
     try {
       let response = await axios.post('/api/login', { email, password });
   
       if (response.data.token) {
          const token = response.data.token;
          // cookie.set("token" , JSON.stringify(token));
          localStorage.setItem("token" , JSON.stringify(token))
           // Decode the token to access the userName
      const decodedToken = jwt.decode(token, secret);
      const userName = decodedToken.name;
      setCookie("token" , token, {
        maxAge: 24 * 60 * 60, // Max age for the cookie restrict to one day
      });
      console.log(`Welcome, ${userName}!`);
      console.log(response.status)
      
      if(response.status === 200) {
        setShowLoader(true)
        toast.success("Successful Login.....");
        setTimeout(() => {
          router.push('/home'); // Redirect on successful login
        }, 800); 
      }
        

       } else {
        
        
         console.log(response.data.token)
         console.log(response.status)
         
         router.push("/login");
        
       }
     } catch (error) {
       console.error('Error during login:', error);
      if (axios.isAxiosError(error) && error.response) {
        const { status, data } = error.response;
        if(status === 500 ) {
          setPassword('')
          setEmail('')
            toast.error("Incorrect credentials.....")
        }
        console.log(`Server responded with status ${status}:`, data);
        
        
        
      } else {
        
        setErrorMessage('Internal Server Error');
      }
      
     }
   };
  return (
    <>
    {loader ?       <LoadingBar
        color='#001f3f'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      /> : ""}
    <ToastContainer 
    position="top-right"
    
    />
      <motion.div className="mt-[80px] flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 "
          initial={{opacity:0 , y:-150}}
          animate={{opacity:1, y:0}}
          transition={{duration:.75 }}
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="font-bold block text-sm leading-10 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 input-fields sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className=" block text-sm font-bold leading-10  text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 input-fields placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm mt-2">
                <p>{errorMessage}</p>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 primary-btn"
                onClick={() => setProgress(100)}
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link href="/signup" className="font-semibold leading-6 links">
              {' '}
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Login;




