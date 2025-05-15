'use client'
import React, { useEffect, useState } from 'react'
import styles from '../../style/About.module.css'
import DOMPurify from 'dompurify'
import Link from 'next/link'
import HTMLContent_Convert from '@/component/DOMPurify';
import Image from "next/image";

function About() {

  const [pageData, setPageData] = useState([]);
  const [mediaData, setMediaData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchPageData() {
        try {
          const res = await fetch(
            'https://bill365.app/bill365/wp-json/wp/v2/pages/8'
          );
          const data = await res.json();
          setPageData(data);
          getMediaAPI(data)
          
        } catch (error) {
          console.error('Error fetching articles:', error);
        } finally {
          setLoading(false);
        }
      }

      async function fetchMediaAPI(featuredMedia) {
        try {
          const res = await fetch(
            `${featuredMedia}`
          );
          const data = await res.json();
          setMediaData(data);
          console.log(data.source_url, 'setMediaData');
          
          
        } catch (error) {
          console.error('Error fetching articles:', error);
        } finally {
          setLoading(false);
        }
      }

      const getMediaAPI = (data)=>{
      const featuredMedia = data?._links["wp:featuredmedia"][0].href;
      // alert(featuredMedia)
      fetchMediaAPI(featuredMedia)
      }
  
    useEffect(() => {
      fetchPageData();
    }, []);


  return (
    <>
    {/* {JSON.stringify(pageData.left_and_right_image_text?.left_and_right_repeater, null, 2)} */}
    <div className={`w-full ${styles.banner_sec_inner}`} style={{ backgroundImage: `url(${pageData?.acf?.inner_page_banner?.banner_image?.url?.length ? pageData?.acf?.inner_page_banner?.banner_image?.url : ''})` }}>
    <div className={`container mx-auto px-4 sm:px-6 ${styles.banner_padd_Inner}`}>
      <div className={`${styles.banner_sec_content_inner}`}>
      <HTMLContent_Convert className={`${styles.banner_sec_content_inner}`} content={pageData?.acf?.inner_page_banner?.banner_text || ''} />
      <p><Link href={`/contact`}> Get Started </Link></p>
      </div>
    </div>
    </div>

    <div className={`w-full mt-10`}>
    <div className={`container mx-auto px-4 sm:px-6 ${styles.section_text_Inner}`}>
    <div className='grid grid-cols-5 gap-4 py-10'>
    <div className='col-span-3 px-4 flex items-center justify-center'>
    <HTMLContent_Convert className={`${styles.banner_sec_content_inner}`} content={pageData?.content?.rendered || ''} />
    </div>
    <div className='col-span-2 px-4 flex items-center justify-center'>
    <img
    src={mediaData?.source_url}
    // alt={author}
    // width={300}
    // height={200}
    className="w-full h-auto max-w-md object-cover"
    />
    </div>
    </div>
    </div>
    </div>


    <div className="w-full mt-10">
    {pageData?.acf?.left_and_right_image_text?.left_and_right_repeater.map((item, index) => (
    <div key={index}  className={`container mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row ${styles.section_text_Inner} ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center`}>
    {/* Image Section */}
    <div className="md:w-1/2 w-full px-4 flex justify-center">
    <img
    src={item?.image_upload?.url}
    alt={`Image ${index + 1}`}
    className="w-full h-auto max-w-md object-cover"
    />
    </div>

    {/* Text Section */}
    <div className="md:w-1/2 w-full px-4 flex">
    <HTMLContent_Convert className={`${styles.banner_sec_content_inner}`} content={item?.text_section || ''} />
    </div>
    </div>
    ))}
    </div>


    </>
  )
}

export default About