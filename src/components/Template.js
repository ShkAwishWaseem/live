import  React from 'react'
import { useState, useEffect } from 'react';
import {useRouter} from "next/router"
import useFetch from './useFetch';
import Header from './Header';
import Image from "next/image"

const Template = () => {
  const router = useRouter();
  const {id} = router.query;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/get-blogs/${id}`);
        const result = await response.json();

        setData(result);
        setLoading(false);
        console.log(result)
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!data) {
    // Handle the case where data is not available
    return <p>Data not found</p>;
  }

  return (
    
    <>
    <Header/>
    {loading ? (
          <>
            <div className="loader text-center mt-5">
              <button
                disabled
                type="button"
                className="text-center py-2.5 px-5 me-2 text-sm font-medium text-gray-900  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
              >
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#f59e0b"
                  />
                </svg>
                Loading...
              </button>
            </div>
          </>
        ) : (
          ""
        )}
          <div className="w-[70%] mt-[80px] template-parent container mx-auto p-4 md:p-8 lg:p-12" key={data._id}>
              <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold text-gray-800 mb-4 md:mb-6 lg:mb-8 sm:text-2xl">
                {data.headline}
              </h1>
              <Image
              
              src={data.img_url} 
              width={500}
        height={500}
              alt="Blog Image" 
              className="w-full h-90 object-cover rounded-lg mb-6 md:mb-8 lg:mb-10" 
              />
              
              <div className="text-sm  text-gray-600 mb-4 md:mb-6 lg:mb-8">
                Published at  :  <span className="links font-semibold">
                {new Date(data.createdAt).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}
  </span>
              </div>
              <p className="text-small leading-8 text-gray-700  mb-8 md:mb-10 lg:mb-12 ">
                {data.content}
              </p>
              <div className="bg-gray-200 p-4 md:p-8 lg:p-12 mb-8 md:mb-10 lg:mb-12 color">
                Run ads here and sides as well
              </div>
            </div>
 
  </>
  )
}

export default Template



