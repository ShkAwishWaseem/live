import React , {useState} from 'react'
import Header from '@/components/Header'
import Link from 'next/link'
import axios from "axios"
import {motion } from "framer-motion"
import {  useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const router = useRouter();
     const submitHandler = async(e) => {
      e.preventDefault();
          try { 
               const response = await axios.post("/api/signup", {name,email,password});

              // ~ Checking for the 200 response from the server 

              if(response.status === 200) {
                  toast("Account created 👍")
                  setTimeout(() => {
                    router.push("/login")
                  }, 800); 
              }
          } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
              const { status, data } = error.response;
              if(status === 500 ) {
                setName("")
                setEmail("")
                setPassword("")
                  toast.error("Account is already created .....")
              }
              console.log(`Server responded with status ${status}:`, data);
              
              
              
            } 
          }
          
     }
  return (
    <>
       <Header/>
       <ToastContainer 
    position="top-right"
    
    />
<motion.div className=" mt-[80px] flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
      initial={{opacity:0 , y:-150}}
      animate={{opacity:1, y:0}}
      transition={{duration:.75 }}
>
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up now</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={submitHandler}>
      <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
        <div className="mt-2 mb-4">
          <input  id="name" type="text"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900  placeholder:text-gray-400  input-fields sm:text-sm sm:leading-6" value={name}
          onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div >
        <label  className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2 mb-4">
          <input id="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400  input-fields sm:text-sm sm:leading-6" value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
        
          <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
          </div>
        </div>
        <div className="mt-2 ">
          <input id="password"  type="password" autocomplete="current-password" required className=" block w-full rounded-md border-0 py-1.5 text-gray-900  placeholder:text-gray-400 input-fields sm:text-sm sm:leading-6" value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button  type="submit" className="flex w-full justify-center rounded-mdpx-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 primary-btn rounded-lg">Sign up</button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Already have an Account? 
      <Link href="/login" className="font-semibold leading-6 links"> Login</Link>
    </p>
  </div>
      </motion.div>
    </>
  )
}

export default Signup
