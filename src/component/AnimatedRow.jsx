// components/AnimatedRow.jsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from '../style/Home.module.css'
import HTMLContent_Convert from "./DOMPurify";

export function AnimatedRow({ 
  content_short_describ, 
  section_long_text,
  image, 
  index
 }) {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };

  return (

<>
      <div className={`w-full mt-10 ${styles.section_text}`}>
        {/* {pageData?.map((item, index) => ( */}
          <div
            // key={index} 
            className={`container mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row ${styles.row_custom} ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center`}>
            {/* Image Section */}
            <div className={`md:w-1/2 w-full px-4 flex justify-center ${styles.imgSec_text}`}>
              <img src={image} alt="row image"/>
            </div>

            {/* Text Section */}
            <div className={`md:w-1/2 w-full px-4 ${styles.imgSec_textArea}`}>

              <HTMLContent_Convert content={content_short_describ || ''} />


              {isExpanded && (

              <HTMLContent_Convert content={section_long_text || ''} />
              )}
              <button onClick={toggleReadMore} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-lg font-medium text-white backdrop-blur-3xl">
              {isExpanded ? 'Read Less' : 'Read More'}
              </span>
              </button>

            </div>
          </div>
        {/* ))} */}
      </div>
    </>

  );
}