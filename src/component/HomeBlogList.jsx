import React from 'react'

function HomeBlogList() {
  return (
    <>
       <div className='container mx-auto py-10'>
        <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2">
        <h2 className="relative z-10 mx-auto w-full text-center text-5xl/12 font-bold text-gray-900 dark:text-gray-900 home_feature_title mb-2">
        Our Latest Articles and Blogs  </h2>
        <p className="relative z-10 mx-auto w-full pb-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400">
        To learn more about our billing software, bill365, follow our blog page.
        </p>
        </div>
        <div className="col-start-1 col-end-3 px-5">
        BLOG 1
        </div>
        <div className="col-start-3 col-end-5 px-5">
        BLOG 2
        </div>
        <div className="col-start-5 col-end-7 px-5">
        BLOG 3
        </div>
        </div>
        </div> 
    </>
  )
}

export default HomeBlogList