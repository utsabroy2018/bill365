'use client'

import React from 'react'
import Image from 'next/image';
import { IconHome, IconUser, IconDatabase } from "@tabler/icons-react";

function HomeMobileFeature_New({data}) {
  return (
        <>
        
        {/* {JSON.stringify(data, null, 2)} */}
        <div className='container mx-auto pt-10'>
        <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 col-start-2">
        <h2 className="relative z-10 mx-auto w-full text-center text-5xl/12 font-bold text-gray-900 dark:text-gray-900 home_feature_title mb-2">
        <span>Advantages You’ll Get</span>
        Benefits of Using
GST Billing APP in Kolkata
        </h2>
        <p className="relative z-10 mx-auto w-full py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400">
        Let us revolutionize your billing process with our advanced GST billing app in Kolkata. Automate invoices, ensure flawless tax compliance and free yourself to focus on what matters most.
        </p>
        </div>
        <div className="col-start-1 col-end-3">
        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-1 sm:gap-y-8 lg:gap-x-8">
            {data.map((feature) => (
              <div key={feature.name} className="border-b border-gray-200 pb-4">
                <div className='bg-indigo-800 px-5 py-5 inline-block border rounded-lg border-none'>
                <IconDatabase className='text-white'/>
                </div>
                <dt className="font-medium text-lg text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="col-start-3 col-end-5 flex">
            <Image
                      src="/mob.png"
                      width={300}
                      height={300}
                      className="w-full"
                      // className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                      alt="linear board demo" />

        </div>
        <div className="col-start-5 col-end-7 text-right">
        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-1 sm:gap-y-8 lg:gap-x-8">
            {data.map((feature) => (
              <div key={feature.name} className="border-b border-gray-200 pb-4">
                <div className='bg-indigo-800 px-5 py-5 inline-block border rounded-lg border-none'>
                <IconDatabase className='text-white'/>
                </div>
                <dt className="font-medium text-lg text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
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