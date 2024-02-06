import React from 'react'

const Usercomments = ({name , time , comment}) => {
  return (
    <>
       <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div className="max-w-2xl mx-auto px-4">
        <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="color inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  {name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time
                    pubdate
                    datetime="2022-02-08"
                    title="February 8th, 2022"
                  >
                          {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        timeZone: 'UTC'
                    }).format(new Date(time))}
                  </time>
                </p>
              </div>
             

            </footer>
            <p className="text-gray-500 dark:text-gray-400">
        {comment}
            </p>
           
         
    </article>
    
    
    
          </div> 
          </section>
     </>
          
    
  )
}

export default Usercomments
