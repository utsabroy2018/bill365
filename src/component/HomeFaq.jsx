'use client';
// components/FaqAccordion.js
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import HTMLContent_Convert from "./DOMPurify";
import styles from '../style/Home.module.css'



export default function HomeFaq({
  pageDataTitle,
  pageData
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='container mx-auto py-10'>
        <div className={`${styles.faqSec}`}>
        <div className={`${styles.section_header}`}> 
        <HTMLContent_Convert content={pageDataTitle || ''} />
        </div>
      <div className={`${styles.faqSec_sub} px-5`}>
        {pageData?.map((faq, index) => (
          <div key={index} className="rounded-lg shadow-xl/7">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-xl p-4 text-left font-medium cursor-pointer"
            >
              <span>{faq?.section_title}</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className={`p-4  border-t border-gray-300 text-gray-700 ${styles.accordion_faq}`}><HTMLContent_Convert content={faq?.section_description || ''} /></div>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
