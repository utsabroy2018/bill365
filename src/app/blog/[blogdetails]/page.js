'use client'
import React, { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
import { useParams } from 'next/navigation'
import { htmlToText } from 'html-to-text';
import styles from '../../../style/Blog.module.css'
import Image from "next/image";
import BlogSidebar from '@/component/BlogSidebar';

function Blogdetails(props) {
    const params = useParams();
    const blog_ID = params.blogdetails

      const [articles, setArticles] = useState([]);
      const [articlesFeaturImg, setArticlesFeaturImg] = useState('');
      const [articles_Sidebar, setArticles_Sidebar] = useState([]);

      const [loading, setLoading] = useState(true);
    
     async function fetchNewsDetails() {
          setLoading(true);
          try {
            const res = await fetch(
              `https://bill365.app/bill365/wp-json/wp/v2/posts/${blog_ID}`
            );
            const data = await res.json();
            setArticles(data);
            console.log(data.featured_media, 'bloggggggggg');
            fetchNewsDetailsMedia(data.featured_media)
          } catch (error) {
            console.error('Error fetching articles:', error);
          } finally {
            // setLoading(false);
          }
        }

      async function fetchNewsDetailsMedia(media_id) {
        console.log(media_id, 'media_id');
        // setLoading(true);
          try {
            const res = await fetch(
              `https://bill365.app/bill365/wp-json/wp/v2/media/${media_id}`
            );
            const data = await res.json();
            setArticlesFeaturImg(data?.media_details?.sizes?.large?.source_url);
            console.log(data?.media_details?.sizes?.large?.source_url, 'media_id');
            
          } catch (error) {
            console.error('Error fetching articles:', error);
          } finally {
            setLoading(false);
          }
      }

      
      
         // 'https://newsapi.org/v2/everything?q=tesla&from=2025-04-13&sortBy=publishedAt&apiKey=7e5b30be83c547a7bf903bbb9332f133'
      
       async function fetchNews() {
        setLoading(true);
            try {
              const res = await fetch(
                'https://bill365.app/bill365/wp-json/wp/v2/posts'
              );
              const data = await res.json();
              setArticles_Sidebar(data);
              console.log(data, 'bloggggggggg');
              
            } catch (error) {
              console.error('Error fetching articles:', error);
            } finally {
              setLoading(false);
            }
          }
    
      useEffect(() => {
        fetchNewsDetails();
        fetchNews()
      }, []);

console.log(blog_ID, 'props', useParams);

  return (
    <>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-3 gap-4 py-10">
    {/* Blog Details = {blog_ID} // */}
    {/* {JSON.stringify(articles?.content?.rendered, null, 2)} */}
    <div className={`col-span-2 px-4 ${styles.blogdtlsWrap}`}>
      {loading ? (
      <>
      <div className="flex items-center justify-center h-full">
    <div role="status">
    <svg
    aria-hidden="true"
    className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
    d="M100 50.5908C100 78.2051 77.6142 100.591 
    50 100.591C22.3858 100.591 0 78.2051 0 
    50.5908C0 22.9766 22.3858 0.59082 50 
    0.59082C77.6142 0.59082 100 22.9766 100 
    50.5908ZM9.08144 50.5908C9.08144 73.1895 
    27.4013 91.5094 50 91.5094C72.5987 91.5094 
    90.9186 73.1895 90.9186 50.5908C90.9186 
    27.9921 72.5987 9.67226 50 
    9.67226C27.4013 9.67226 9.08144 27.9921 
    9.08144 50.5908Z"
    fill="currentColor"
    />
    <path
    d="M93.9676 39.0409C96.393 38.4038 97.8624 
    35.9116 97.0079 33.5539C95.2932 28.8227 
    92.871 24.3692 89.8167 20.348C85.8452 
    15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 
    4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 
    0.367541 46.6976 0.446843 41.7345 
    1.27873C39.2613 1.69328 37.813 4.19778 38.4501 
    6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 
    10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 
    10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 
    15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 
    25.841C84.9175 28.9121 86.7997 32.2913 88.1811 
    35.8758C89.083 38.2158 91.5421 39.6781 
    93.9676 39.0409Z"
    fill="currentFill"
    />
    </svg>
    <span className="sr-only">Loading...</span>
    </div>
      </div>
      </>
    ) : (
    <div className={`${styles.leftDetails}`}>
    
    <img
    src={articlesFeaturImg}
    // width={300}
    // height={200}
    className="rounded-xs w-full h-full object-cover mb-5"
    />

    <h1>{htmlToText(articles?.title?.rendered, { wordwrap: false })}</h1>
    <div dangerouslySetInnerHTML={{ __html: articles?.content?.rendered }} />
    </div>
     )}
    </div>

    <div className="px-4 sideBarBlog">
      <BlogSidebar articles={articles_Sidebar} />
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Blogdetails