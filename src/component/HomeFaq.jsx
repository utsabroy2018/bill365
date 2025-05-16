'use client';
// components/FaqAccordion.js
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import HTMLContent_Convert from "./DOMPurify";
import styles from '../style/Home.module.css'

const faqs = [
  {
    question: "What is CONFED-WB?",
    answer: "CONFED-WB is an e-commerce platform connecting buyers, sellers, and super admins."
  },
  {
    question: "How do I register as a seller?",
    answer: "Click on the Register link at the top and choose the Seller option to begin the process."
  },
  {
    question: "Is there a return policy?",
    answer: "Yes, products can be returned within 7 days if they meet the return criteria."
  }
];

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
        <div className={`grid grid-cols-6 gap-4 ${styles.faqSec}`}>
        <div className={`col-span-4 col-start-2 ${styles.section_header}`}> 
        <HTMLContent_Convert content={pageDataTitle || ''} />
        </div>
      <div className="col-span-4 col-start-2 px-5">
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
