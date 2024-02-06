import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken'; 
import { secret } from '@/services/authentication';
import { useRouter } from 'next/router';
import Header from './Header';
import {motion} from "framer-motion"

const Add = () => {
  const [username, setUserName] = useState('');
  const [formData, setFormData] = useState({
    headline: '',
    img_url: '',
    category: '',
    content: '',
    createdBy: '',
  });

  useEffect(() => {
    const Token = JSON.parse(localStorage.getItem('token'));
    const decodedToken = jwt.decode(Token, secret);
    const username = decodedToken.name || ''; 
    setUserName(username);
    setFormData({ ...formData, createdBy: username });
  }, [formData]); 

  const router = useRouter();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/blogs', formData);
     
     router.push("/home");
      
    } catch (error) {
      console.error('Error uploading blog:', error);
      
    }
  };

  return (
    <>
    <Header/>
      <div className="mt-[40px] flex flex-col px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <motion.h2 className="mt-2 text-center text-3xl font-bold leading-9 tracking-tight color"
        initial={{opacity:0 , x:-150}}
        animate={{opacity:1, x:0}}
        transition={{duration:.75 , delay:0.6}}
          
          >
            Write Blogs with Blogify 
          </motion.h2>
        </div>
        <motion.div className="mt-10 sm:mx-auto -sm"
              initial={{opacity:0 , y:-150}}
              animate={{opacity:1, y:0}}
              transition={{duration:.75 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="blog-input">
              <label>Title:</label>
              <input
                required
                id="headline"
                name="headline"
                type="text"
                autoComplete="text"
                placeholder="Enter the title of your blog"
                onChange={handleChange}
              />

              <label>Banner Image:</label>
              <input
                id="img_url"
                name="img_url"
                type="text"
                autoComplete="text"
                required
                placeholder="https://images.pexels.com/photos/2437901/pexels-photo-2437901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                onChange={handleChange}
              />

              <label>Category:</label>
              <input
                id="category"
                name="category"
                type="text"
                autoComplete="text"
                required
                placeholder="e.g Entertainment, Coding, Programming, Influencers"
                onChange={handleChange}
              />

              <label>Content:</label>
              <textarea
                id="content"
                name="content"
                type="text"
                autoComplete="text"
                required
                placeholder="Write your blog content here"
                onChange={handleChange}
              />

              <button
                type="submit"
                className="flex w-full justify-center px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2  focus-visible:outline-offset-2 rounded-lg primary-btn "
              >
                Upload
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Add;
