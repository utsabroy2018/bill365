// import AnimatedRow from "@/component/AnimatedRow";
import { AnimatedRow } from "@/component/AnimatedRow";
import { AppleCardsCarouselDemo } from "@/component/AppleCardsCarouselDemo";
import HeaderTop from "@/component/Header_top";
import { HeroSectionOne } from "@/component/HomeWelcome";
// import HomeWelcome from "@/component/HomeWelcome";
import Navbar from "@/component/Navbar";
import Image from "next/image";
// import { motion } from "framer-motion";
import styles from '../style/Home.module.css'
import HomeMobileFeature from "@/component/HomeMobileFeature";
import HomeBlueSection from "@/component/HomeBlueSection";
import { HomeTestimonials } from "@/component/HomeTestimonials";
import HomeBlogList from "@/component/HomeBlogList";
import HomeFaq from "@/component/HomeFaq";
import HomeBillboardCTA from "@/component/HomeBillboardCTA";

// import React, { useEffect, useState } from 'react'

import { BaseUrl } from "./config";

// Server-side data fetch
async function fetchPageData() {
  const res = await fetch(`${BaseUrl}wp-json/wp/v2/pages/2`, {
    // cache: 'no-store', // Or 'force-cache' depending on your use case
    next: {
      revalidate: 10 // fetch data after every 10 sec
    }, 
  });
  const data = await res.json();
  return data;
}


// export default function Home() {

export default async function Home() {
  const pageData = await fetchPageData();

  // const [pageData, setPageData] = useState([]);
  // // const [loading, setLoading] = useState(true);

  // async function fetchPageData() {
  //   try {
  //     const res = await fetch(
  //       `${BaseUrl}wp-json/wp/v2/pages/2`
  //     );
  //     const data = await res.json();
  //     setPageData(data);

  //     console.log(data, 'datadatadata');


  //   } catch (error) {
  //     console.error('Error fetching articles:', error);
  //   } finally {
  //     // setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchPageData();
  // }, []);


  return (
    <>
      <HeaderTop />
      {/* <BannerBottomScroll /> */}




      <AppleCardsCarouselDemo pageData={pageData?.acf?.our_client} />

      <HeroSectionOne pageData={pageData?.content?.rendered} />


      <div className="container mx-auto px-4 py-3">
        {pageData?.acf?.left_text_right_image_section_new?.map((row, index) => (
          <AnimatedRow
            index={index}
            content_short_describ={row?.section_text}
            section_long_text={row?.section_long_text}
            image={row?.image_section?.url}
          />
        ))}
      </div>


      <HomeMobileFeature
        pageDataTitle={pageData?.acf?.app_feature_section?.app_feature_title}
        pageDataLeft={pageData?.acf?.app_feature_section?.app_feature_repeater_left}
        pageDataRight={pageData?.acf?.app_feature_section?.app_feature_repeater_right}
      />
      <HomeBlueSection pageData={pageData?.acf?.blue_section?.content_section} />

      <HomeTestimonials pageDataTitle={pageData?.acf?.customer_say?.customer_say_title} pageData={pageData?.acf?.customer_say?.customer_say_repeater} />

      <HomeBlogList />
      {/* {JSON.stringify(pageData?.acf?.faq?.faq_repeater, null, 2)} */}
      <HomeFaq pageDataTitle={pageData?.acf?.faq?.faq_title} pageData={pageData?.acf?.faq?.faq_repeater} />

      <HomeBillboardCTA pageData={pageData?.acf?.blue_bottom_section?.content_section} />




    </>
  );
}
