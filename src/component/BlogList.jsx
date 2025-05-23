"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";

import defaultFeatureImg from "../../public/blog_demo.png"


export function BentoGridThirdDemo({articles}) {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(articles.length / itemsPerPage);

    const paginatedArticles = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
    );

    const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };




  return (
    <>

    {/* <pre>
      // {JSON.stringify(paginatedArticles[0]?.date, null, 2)}
      </pre> */}

    <BentoGrid className="mx-auto md:auto-rows-[20rem]">
      
      {paginatedArticles.map((item, i) => (
        <>
        {item?._embedded?.["wp:featuredmedia"] ? (
          <>
          <BentoGridItem
          key={i}
          title={item?.title?.rendered}
          description={item?.excerpt?.rendered}
          header={item?._embedded["wp:featuredmedia"][0].source_url}
          datePublish={item?.date}
          className={cn("[&>p:text-lg]", item.className)}
          id={item?.id}
          />
          </>
        ):(
          <>
          <BentoGridItem
          key={i}
          title={item?.title?.rendered}
          description={item?.excerpt?.rendered}
          header={defaultFeatureImg?.src}
          datePublish={item?.date}
          className={cn("[&>p:text-lg]", item.className)}
          id={item?.id}
          />
          </>
        )}
          </>
      ))}
    </BentoGrid>



    {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-5">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50 cursor-pointer"
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>
    
    </>
  );
}

