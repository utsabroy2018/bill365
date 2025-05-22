'use client'

import React from 'react'
import Image from 'next/image';
import { IconHome, IconUser, IconDatabase } from "@tabler/icons-react";
import HTMLContent_Convert from './DOMPurify';
import styles from '../style/Home.module.css'

function HomeMobileFeature_New({
  pageDataTitle,
  pageDataLeft,
  pageDataRight,
}) {
  return (
        <>
        
        {/* {JSON.stringify(data, null, 2)} */}
        <div className='container mx-auto pt-10'>
        <div className="grid grid-cols-6 gap-4">
        <div className={`col-span-4 col-start-2 ${styles.heading_title_feature}`}>
          <HTMLContent_Convert content={pageDataTitle || ''} />
        </div>
        <div className="col-start-1 col-end-3">
        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-1 sm:gap-y-8 lg:gap-x-8">
            {pageDataLeft?.map((item) => (
              <div key={item.section_title} className="border-b border-gray-200 pb-4">
                <div className='bg-indigo-800 px-3 py-3 inline-block border rounded-lg border-none'>
                {/* <IconDatabase className='text-white'/> */}
                <img src={item?.icon?.url} alt="" width={item?.icon?.width} height={item?.icon?.height} />
                </div>
                <dt className="text-xl font-bold text-gray-900">{item?.section_title}</dt>
                <dd className="mt-2 text-base text-gray-500"><HTMLContent_Convert content={item?.section_description || ''} /></dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="col-start-3 col-end-5 flex">
            <img
                      src="/mob.png"
                      width={300}
                      height={300}
                      className="w-full"
                      // className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                      alt="linear board demo" />

        </div>
        <div className="col-start-5 col-end-7 text-right">
        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-1 sm:gap-y-8 lg:gap-x-8">
            {pageDataRight?.map((item) => (
              <div key={item.section_title} className="border-b border-gray-200 pb-4">
                <div className='bg-indigo-800 px-3 py-3 inline-block border rounded-lg border-none'>
                {/* <IconDatabase className='text-white'/> */}
                <img src={item?.icon?.url} alt="" width={item?.icon?.width} height={item?.icon?.height} />
                </div>
                <dt className="text-lg font-bold text-gray-900">{item?.section_title}</dt>
                <dd className="mt-2 text-base text-gray-500"><HTMLContent_Convert content={item?.section_description || ''} /></dd>
              </div>
            ))}
          </dl>
        </div>
        
        {/* <div className="col-span-2">022222222</div>
        <div className="col-span-2">033333333</div>
        <div className="col-span-2">044444444</div> */}
        {/* <div className="col-start-1 col-end-7 ...">04</div> */}
        </div>
        </div>

        </>
  )
}

export default HomeMobileFeature_New