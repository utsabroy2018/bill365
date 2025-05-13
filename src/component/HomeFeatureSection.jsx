'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../style/Home.module.css'

export default function HomeFeatureSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="flex flex-col md:flex-row items-center gap-6 p-6 max-w-7xl container mx-auto">
      {/* Left: Text */}
      <div className="md:w-1/2">
      
        <h2 className="text-4xl/12 font-bold mb-4">
            <span className={`text-2xl block ${styles.pinkcolor}`}>Hassle-free Online Billing Software</span>
            Create Invoices at Lightning Speed with Our Billing Software</h2>
        <p className="text-gray-700 text-lg mb-5">
        A customized and exclusive toolkit of management features makes Bill365 an ideal billing software in India for retailers. 
        In less than a second, it generates bills. Let’s make billing a harmonious process!{' '}
          
        </p>
{isExpanded && (
            <>
            <p className="text-gray-700 text-lg mb-5">
              When we are using the word quick, we mean it! From personalized integration of product receipts all you get from our 
              all-in-one Free GST invoicing Software. The Billing Software in Kolkata ensures compliance by providing an easy and 
              quick process to generate bills. From the intuitive interface to the navigation process, all feel like spreading butter on bread.
              </p>
              <p className="text-gray-700 text-lg mb-5">
              Say goodbye to the hassle of tedious calculations and manual invoicing. Our best billing app for small businesses automates 
              the entire billing process, allowing you to create accurate bills by just adding numbers of goods. Whether you’re a small 
              business owner or a large corporation, our invoice generator software adapts to your unique needs and helps you save time and effort.
              </p>
              <p className="text-gray-700 text-lg mb-5">
              Focus on your core business activities while Bill365, inventory, and invoice software handle the repetitive task of bill 
              generation. Eliminate the possibility of errors that can occur with manual billing. Bill365 ensures accuracy and consistency in your invoices.
              </p>
              <p className="text-gray-700 text-lg mb-5">
              With simple invoicing software, you can print your invoice or send an SMS to your customers to save time and focus on what 
              you do best – growing your business. Experience the convenience and efficiency of automated billing with our best free invoice 
              maker today. Experience the speed and efficiency of Bill365’s lightning-fast billing.
              
                          </p>
            </>
          )}


        <button onClick={toggleReadMore} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-lg font-medium text-white backdrop-blur-3xl">
  {isExpanded ? 'Read Less' : 'Read More'}
  </span>
</button>
        
        {/* <button
          onClick={toggleReadMore}
          className="mt-4 text-blue-600 hover:underline"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button> */}
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2">
        <Image
          src="/feature-item-1-1.webp"
          alt="Descriptive Alt Text"
          width={500}
          height={400}
          className="rounded-xl shadow-md w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
