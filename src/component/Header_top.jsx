'use client'
import React from 'react'
import styles from '../style/Home.module.css'
import RequestDemoForm from './contactForm_test'

function HeaderTop() {
  return (
    <>
<div className={styles.banner_sec}>
	<div className={`container mx-auto pt-3 pb-3 px-4 sm:px-6 flex justify-between items-center ${styles.banner_padd}`}>
	<div className={styles.banner_sec_content}>
		<h4 className={styles.sub_title}>Simplify Invoicing, Amplify Productivity.</h4>
		<h1 className={styles.title}>All-in-One and Easy to Use 
Billing Software with GST
</h1>
		<p>Empower your business with Bill365, the best billing software in India, 
to streamline your operations and make accounting a doddle 
with our online invoicing software.</p>
{/* <RequestDemoForm /> */}
		
		{/* <div className={styles.formSec_header}>
		<div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-full mx-auto">
  <div className="flex w-full sm:w-2/3 items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-2xl">
    <input
      type="tel"
      placeholder="91"
      className="w-16 bg-indigo-500 outline-none text-white placeholder-gray-400 px-4 py-3 rounded-tl-3xl rounded-bl-3xl"
    //   disabled={true}
    />
    <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
    <input
      type="tel"
      placeholder="Enter Your Number"
      className="flex-1 bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-400 px-4 py-3"
	//   oninput="this.value = this.value.replace(/[^0-9]/g, '')"
    />
  </div>
  <button
    className="w-full sm:w-1/3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg 
	transition hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer"
  >
    Request Demo
  </button>
</div>


		
		</div> */}
	</div>
	</div>
</div>

    </>
  )
}

export default HeaderTop