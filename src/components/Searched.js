import Header from '@/components/Header'
import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'

const Searched = ({headline, content , img_url , category , createdAt , Id}) => {
     const truncateText = (text, maxWords) => {
          const words = text.split(' ').slice(0, maxWords).join(' ');
          return words + (text.split(' ').length > maxWords ?  " Read more ......" : '');
        };
const router = useRouter();
  return (
    <>
    <Header/>
     <section className="bg-white dark:bg-gray-900 mt-[100px]">
    <div className="container px-6 py-10 mx-auto">
       

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={img_url} alt="img" />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p className="text-sm color uppercase">{category}</p>

                <Link href= {`/blog/${Id}`} passHref className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">
                {headline}
            </Link> 
            
            


                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                {truncateText(content, 25)}
                </p>

                

                <div className="flex items-center mt-6">
                    <div className="mx-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        timeZone: 'UTC'
                    }).format(new Date(createdAt))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> 

    </>
  )
}

export default Searched;
