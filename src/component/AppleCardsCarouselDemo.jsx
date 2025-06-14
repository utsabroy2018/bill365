"use client";

// import React from "react";
// import { Card } from "@/component/ui/apple-cards-carousel";
import styles from '../style/Home.module.css'
import HTMLContent_Convert from "./DOMPurify";
import CaroselSec from "./CaroselSec";

export function AppleCardsCarouselDemo({pageData}) {
  

  return (
    <div className={styles.scroll_Sec}>

      
    {/* <div className="w-full h-full py-20"> */}
    <div className={`${styles.banner_logo_wrap} container mx-auto pt-3 pb-3 px-4 sm:px-6 mt-5`}>
    <div className={styles.banner_logo_left}>
    <h4 className={`${styles.title_partner} text-xl font-bold`}>
      <HTMLContent_Convert content={pageData?.our_client_title || ''} />
      {/* Throw away your billing headache  with the online billing App,  <span>Bill365</span> */}
      </h4>
      </div>
      <div className={styles.banner_logo_right}>
      <div className={styles.partner_box}>
      {/* <Carousel items={cards} /> */}
      <CaroselSec itemName={pageData?.our_client_logo_repeater} />
      </div>
      </div>
    </div>
    </div>
  );
}
