"use client";

import React from "react";
// import { Card } from "@/component/ui/apple-cards-carousel";
import styles from '../style/Home.module.css'
import HTMLContent_Convert from "./DOMPurify";
import Carousel_2 from "./CaroselSec";

export function AppleCardsCarouselDemo({pagedata}) {
  

  return (
    <div className={styles.scroll_Sec}>
      {JSON.stringify(pagedata?.our_client_logo_repeater, null, 2)} /////////
{/* {JSON.stringify(cards, null, 2)} */}
      
    {/* <div className="w-full h-full py-20"> */}
    <div className={'container mx-auto pt-3 pb-3 px-4 sm:px-6 flex justify-between items-center grid grid-cols-12 gap-4 mt-5'}>
    <div className='col-span-3'>
    <h4 className={`${styles.title_partner} text-xl font-bold`}>
      <HTMLContent_Convert content={pagedata?.our_client_title || ''} />
      {/* Throw away your billing headache  with the online billing App,  <span>Bill365</span> */}
      </h4>
      </div>
      <div className='col-span-9'>
      <div className={styles.partner_box}>
      {/* <Carousel items={cards} /> */}
      <Carousel_2 />
      </div>
      </div>
    </div>
    </div>
  );
}
