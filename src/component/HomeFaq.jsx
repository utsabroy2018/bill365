'use client';
// components/FaqAccordion.js
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='container mx-auto py-10'>
        <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2"> 
        <h2 className="relative z-10 mx-auto w-full text-center text-5xl/12 font-bold text-gray-900 dark:text-gray-900 home_feature_title mb-2">
        <span> We got your back. Contact us to learn more! </span>
        FAQs
        </h2>
        <p className="relative z-10 mx-auto w-full pb-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400">
        Discover answers to all your questions and enhance your understanding to make smarter decisions 
        on saving, investing, and spending. Explore all queries here for valuable insights!
        </p>
      </div>
      <div className="col-span-4 col-start-2 px-5">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg shadow-xl/7">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-xl p-4 text-left font-medium"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-4  border-t border-gray-300 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
