"use client";
import { BentoGridThirdDemo } from '@/component/BlogList'
// import React, { useEffect } from 'react'
import React, { useEffect, useState } from 'react';

function Blog() {

   const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

 async function fetchNews() {
      try {
        const res = await fetch(
          'https://newsapi.org/v2/everything?q=tesla&from=2025-04-13&sortBy=publishedAt&apiKey=7e5b30be83c547a7bf903bbb9332f133'
        );
        const data = await res.json();
        setArticles(data.articles);
        console.log(data.articles, 'bloggggggggg');
        
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    }

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
    <div className="container mx-auto px-4">
    <div className="grid grid-cols-3 gap-4 py-10">

    <div className="col-span-2 px-4">
      {/* <BentoGridThirdDemo /> */}
      <BentoGridThirdDemo articles={articles} />

          <p><a href='/blog/product-1'>Products 1</a></p>
        <p><a href='/blog/product-2'>Products 2</a></p>
        <p><a href='/blog/product-3'>Products 3</a></p>
    </div>
    <div className="px-4">05</div>
    </div>
    </div>
    </>
  )
}


export default Blog