import React from 'react'
import { useRouter } from 'next/router'
import Link from "next/link"
import {motion} from "framer-motion"
import Image from 'next/image'

        const Homecards = ({headline, content, img_url , createdAt , Id , category , createdBy}) => {
        const router = useRouter();

    const clickHandler  = () => {
     const blogId = url.split('/').pop();    
    router.push(`/blog/${blogId}`);
        }
        const truncateText = (text, maxWords) => {
            const words = text.split(' ').slice(0, maxWords).join(' ');
            return words + (text.split(' ').length > maxWords ?  " Read more ......" :' ');
          };
  return (
     <>
     <motion.section className="bg-white dark:bg-gray-900"
         initial={{opacity:0 }}
         whileInView={{opacity:1}}
         transition={{duration:1 , delay:0.3}}
     >
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6">
                <Image
                    src={img_url}
                    alt="Banner Image"
                    width={500}
                    height={500}
                    className='object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl'
                    // unoptimized={true}
                />
                
            

                <div>
                
                           <Link href= {`/blog/${Id}`} passHref className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">
                {headline}
            </Link>
                    <p className=" mt-4 leading-tight text-gray-800 dark:text-white">
                    {truncateText(content, 25)}
                    </p>


                    <div className="flex items-center mt-6">

                        <div className="mx-4">
                                <span className="text-sm dark-color">
                        {createdBy}
                            <span className=" ml-4 text-sm text-gray-500 dark:text-gray-400">
                            {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        timeZone: 'UTC'
                    }).format(new Date(createdAt))}
                            </span>
                                </span>
                                <br/>
                                <span className=" text-sm dark-color">Category : </span>
                            <span className=" ml-2 text-sm color uppercase">{category}</span>
                        </div>
                    </div>
                </div>
            </div>

       
        </div>
    </div>
</motion.section>   
    </>
      
    
  )
}

export default Homecards
