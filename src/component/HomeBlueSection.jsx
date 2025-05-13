import React from 'react'
import styles from '../style/Home.module.css'

function HomeBlueSection() {
  return (
    <>
    <div className={`w-full py-10 bg-indigo-800 ${styles.blueSec}`}>
    <div className={`container mx-auto py-10 ${styles.blue_txt}`}>
     <div className="grid grid-cols-6 gap-4">
     <div className="col-span-3 col-start-1">
     <h2 className='text-xl'><strong>Think and Choose Wisely. </strong> Why Choose Bill365 for the Best Billing App in India?</h2>

     <p>Effortless features and an intuitive admin panel of Bill365<br />
make all kinds of work easy for every retail business owner.<br/>
Bill365 emerges as the top pick for the billing app in Kolkata<br/>
in the Indian market, offering expertise, reliability, and efficiency<br/>
for seamless transactions and effortless invoicing.</p>
<ul>
<li>OTP based login</li>
<li>Store Customer details for future promotion</li>
<li>Purchase orders and purchase invoices</li>
<li>Realtime stock reports</li>
<li>Edit bills</li>
<li>Unlimited Products/ Bulk Upload</li>
<li>Multiple Device Login in any Android devices</li>
<li>Thermal printing</li>
<li>Multiple Users</li>
<li>GSTR &amp; Business reports</li>
</ul>
        </div>
        </div>
        </div>
        </div>

 
    </>
  )
}

export default HomeBlueSection