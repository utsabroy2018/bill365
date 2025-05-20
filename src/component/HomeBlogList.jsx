"use client";
import React, { useEffect, useState } from 'react'
import styles from '../style/Home.module.css'
import HTMLContent_Convert from './DOMPurify';
import { useRouter } from 'next/router';

function HomeBlogList() {

  const [articles, setArticles] = useState([]);
  // const router = useRouter();

   async function fetchNews() {
        try {
          const res = await fetch(
            // 'https://bill365.app/bill365/wp-json/wp/v2/posts'
            // 'https://bill365.app/bill365/wp-json/wp/v2/posts?_embed'
            'https://bill365.app/bill365/wp-json/wp/v2/posts?_embed&per_page=100&page=1'
          );
          const data = await res.json();
          setArticles(data);
          console.log(data, 'bloggggggggg');
          
        } catch (error) {
          console.error('Error fetching articles:', error);
        } finally {
          setLoading(false);
        }
      }
  
    useEffect(() => {
      fetchNews();
    }, []);
    


  return (
    <>
       <div className='container mx-auto py-10'>
        {/* <div className="grid grid-cols-6 gap-4"> */}
        <div className="col-span-4 col-start-2">
        <h2 className="relative z-10 mx-auto w-full text-center text-5xl/12 font-bold text-gray-900 dark:text-gray-900 home_feature_title mb-2">
        Our Latest Articles and Blogs  </h2>
        <p className="relative z-10 mx-auto w-full pb-10 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400">
        To learn more about our billing software, bill365, follow our blog page.
        </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
        {articles?.slice(0, 3).map((item, index) => (
        <div className={`px-5 ${styles.blogFeedBox} ${index === 0 ? styles.blg_0 : index === 1  ? styles.blg_1 : index === 2 ? styles.blg_2 : ""}`}>
        <div className={styles.imgSec}>
			  <span className={styles.dateSec}><i className="fa fa-calendar" aria-hidden="true"></i> May 19, 2025 </span>
        <div className="h-50  overflow-hidden flex justify-center items-center">

        {item?._embedded?.["wp:featuredmedia"] ? (
        <img src={item?._embedded["wp:featuredmedia"][0].source_url} alt="" 
        className="object-cover h-full w-full" />
        ):(
        <img src="https://bill365.app/bill365/wp-content/themes/bill365-child/assets/images/blog_demo.png" alt="" 
        className="object-cover h-full w-full" />
        )}
        
        </div>
				</div>

        <div className={styles.description}>

        <h2><a href={`/blog/${item?.id}`}>
        <HTMLContent_Convert content={`${item?.title?.rendered?.split(' ').slice(0, 4).join(' ')}${item?.title?.rendered?.split(' ').length > 4 ? '...' : ''}`} />
        </a></h2>
        <HTMLContent_Convert content={`${item?.excerpt?.rendered?.split(' ').slice(0, 16).join(' ')}${item?.excerpt?.rendered?.split(' ').length > 16 ? '...' : ''}`} />


        </div>

        </div>
        ))}
        </div>

        {/* <div className={`col-start-1 col-end-3 px-5 ${blogFeedBox}`}>
        BLOG 1
        </div>
        <div className="col-start-3 col-end-5 px-5">
        BLOG 2
        </div>
        <div className="col-start-5 col-end-7 px-5">
        BLOG 3
        </div> */}
        {/* </div> */}
        </div> 
    </>
  )
}

export default HomeBlogList