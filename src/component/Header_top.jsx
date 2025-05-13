'use client'
import React from 'react'
import styles from '../style/Home.module.css'

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
		
		<div className={styles.formSec_header}>
		<div className="row">
      Form
		{/* <div className="col-sm-8 phoneField">
			<input type="tel" placeholder="91" className="phone_1" readonly>
			<input type="tel" placeholder="Enter Your Number" className="phone_2">
			</div> */}
		{/* <div className="col-sm-4"><input type="button" value="Request For a Demo" className="button_CTA"></div> */}
		</div>
		</div>
	</div>
	</div>
</div>

    </>
  )
}

export default HeaderTop