'use client'
import React, { useEffect, useState } from 'react'
import styles from '../../style/Contact.module.css'
import DOMPurify from 'dompurify'
import Link from 'next/link'
import HTMLContent_Convert from '@/component/DOMPurify';
import Image from "next/image";

function Contact() {

      const [pageData, setPageData] = useState([]);
      const [loading, setLoading] = useState(true);

      async function fetchPageData() {
      try {
      const res = await fetch(
      'https://bill365.app/bill365/wp-json/wp/v2/pages/324'
      );
      const data = await res.json();
      setPageData(data);

      } catch (error) {
      console.error('Error fetching articles:', error);
      } finally {
      setLoading(false);
      }
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
      </div>
    </div>
    </div>

    <div className={`w-full mt-10`}>
    <div className={`container mx-auto px-4 sm:px-6 py-10 ${styles.section_text_Inner}`}>
    <HTMLContent_Convert className={`${styles.banner_sec_content_inner}`} content={pageData?.content?.rendered || ''} />
    </div>
 
    </div>



    </>
  )
}

export default Contact