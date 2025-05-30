'use client'
import { useEffect, useState } from 'react';
import { BaseUrl } from '@/app/config'; // adjust path as needed

const HomeFetchData = () => {
  const [pageData, setPageData] = useState([]);

  const fetchPageData = async () => {
    try {
      const res = await fetch(`${BaseUrl}wp-json/wp/v2/pages/2`);
      const data = await res.json();
      setPageData(data);
      console.log(data, 'datadatadata');
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  useEffect(() => {
    fetchPageData();
  }, []);

  return pageData;
};

export default HomeFetchData;
