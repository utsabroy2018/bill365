// components/AnimatedRow.jsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from '../style/Home.module.css'

export function AnimatedRow({ content, image, reverse }) {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col md:flex-row items-center gap-6 p-6 max-w-7xl container mx-auto ${reverse ? "md:flex-row-reverse" : ""} items-center gap-6 py-5`}
    >
      <div className="md:w-1/1">
        {/* <h2 className="text-2xl font-bold">{content.title}</h2> */}
        <h2
          className="text-4xl/12 font-bold mb-4 home_feature_title"
          dangerouslySetInnerHTML={{ __html: content.title }}
        />
        <p className="text-gray-700 text-lg mb-5">{content.shortText}</p>
        {isExpanded && (
        <p className="text-gray-700 text-lg mb-5">
        {content.fullText}
        </p>
        )}
        <button onClick={toggleReadMore} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-lg font-medium text-white backdrop-blur-3xl">
  {isExpanded ? 'Read Less' : 'Read More'}
  </span>
</button>
      </div>
      <div className="md:w-1/2">
        <img src={image} alt="row image" className="rounded-xl shadow-md" />
      </div>
    </motion.div>
  );
}
