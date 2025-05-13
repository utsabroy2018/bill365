'use client';
import Image from 'next/image'
import styles from '../style/Home.module.css'

export default function HomeBillboardCTA() {
  return (
    <div className='container mx-auto pt-10 pb-15'>
    <div className={`${styles.blueSec_Bottom} text-white px-8 py-5 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6`}>
      {/* Left Section */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          Let’s Make Your Billing A Breeze With <span className="text-white">Bill365</span>
        </h2>
        <p className="mt-4 text-lg font-medium">
          Experience hassle-free invoicing like never before!
        </p>
        <button className="mt-6 px-10 py-3 rounded-full bg-white text-indigo-800 font-semibold shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>

      {/* Right Section */}
      <div className="flex justify-center">
        <Image
          src="/get-start.webp" // Replace this with your actual image path
          alt="Happy user"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
    </div>
  )
}
