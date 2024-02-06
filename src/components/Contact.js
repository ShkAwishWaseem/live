import React, {useState , useEffect} from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {motion} from "framer-motion"


const Contact = () => {
     const [email, setEmail] = useState("")
     const [subject, setSubject] = useState("")
     const [message, setMessage] = useState("")


     const handlerSubmit = async (e) => {
          e.preventDefault();
   
          try {
               const  response = await axios.post("/api/contact" , { email ,subject,message })
               if(response.status === 200) {
                    console.log(response.status)
                    toast("We appreciate your Feedback 👍");
                    setEmail("")
                    setSubject("")
                    setMessage("")
               }
               if(response.status === 500) {
                   toast("Try Different Email 😊");
               }
          } catch (error) {
               toast("Use another Email 😊");
               
               }
               
          }    
        
  return (
    <div>
     <ToastContainer/>
      <div className='contact'>
          <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      
              
                <div
                  className="container mx-auto flex items-centerw-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
                >

    </div>
            
      <motion.form className="space-y-8"  onSubmit={handlerSubmit}
          initial={{opacity:0 , y:-150}}
          animate={{opacity:1, y:0}}
          transition={{duration:.75 }}
      >
          <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email"    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required value={email} 
               onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required value={subject}
              onChange={(e) => setSubject(e.target.value)}
              />
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." value={message}
              onChange={(e) => setMessage(e.target.value)}
              ></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg primary-btn">Send message</button>
      </motion.form>
  </div>
</section>
    </div>
    </div>
  )
}

export default Contact
