import React from 'react';
import useFetch from './useFetch';
import Image from 'next/image';
import ScrollToTopButton from './STT';


const truncateText = (text, maxWords) => {
    const words = text.split(' ').slice(0, maxWords).join(' ');
    return words + (text.split(' ').length > maxWords ?  '.......' : '');
  };
const Fetcheddata = () => {


  const {data,loading} = useFetch("/api/getdata");
    // console.log(data)
  return (
    <>

    <div className='content'>
      <h1 className='text-center mt-[100px]'>New Hot <span className="color">Topics</span></h1>
      {loading ?    (
      <div className="loader text-center mt-5">
      <button disabled type="button" className="text-center py-2.5 px-5 me-2 text-sm font-medium text-gray-900  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
<svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#f59e0b"/>
</svg>
Loading...
</button>
</div>
    ) :

      <div>  
      {Array.isArray(data) &&
  data.map((item, index) => (
    <>
         <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
  
    
         <Image 
src={item.img_url} 
width={500}
        height={500}
className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" 
alt="Image "
        />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p className="text-sm text-blue-500 uppercase">{item.category}</p>

                <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                    {item.headline}
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                {truncateText(item.content, 25)}
                </p>


                <div className="flex items-center mt-6">
                    <div className="mx-4">
                        <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  ))}
      </div> 
};
    </div>
    <ScrollToTopButton/>
    </>
  );
};

export default Fetcheddata;
