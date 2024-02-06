import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Card = ({img_url, heading, category , content, timestamp , Id , createdBy}) => {
    
    const truncateText = (text, maxWords) => {
        const words = text.split(' ').slice(0, maxWords).join(' ');
        return words + (text.split(' ').length > maxWords ?  " Read more ......" : '');
      };
  return (
<>
<motion.div className="p-4 max-w-2xl overflow-hidden rounded-lg shadow-md mt-5 hover:shadow-lg transition-shadow duration-300"
 initial={{opacity:0}}
 whileInView={{opacity:1}}
 transition={{duration:1 , delay:0.3}}

>
    <Image
        src={img_url}
        alt="Article"
        width={500}
        height={500}
        className="object-cover w-full h-64"    
        
    />
    

    <div className="p-6">
        <div>
            <span className="text-xs font-medium uppercase color">{category}</span>
            <Link href= {`/blog/${Id}`} passHref className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">
                {heading}
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{truncateText(content, 30)}</p>
        </div>

        <div className="mt-4">
            <div className="flex items-center">
                <div className="flex items-center">
                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">
                        {category}
                    </a>
                </div>
                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        timeZone: 'UTC'
                    }).format(new Date(timestamp))}
                </span>
                <span className="mx-1 text-xs color">
                    {createdBy}
                </span>
            </div>
        </div>
    </div>
</motion.div>

</>

  );
};

export default Card;