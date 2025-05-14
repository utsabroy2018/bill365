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
          // setLoading(true);
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
            setLoading(false);
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