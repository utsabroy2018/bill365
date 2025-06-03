import Image from 'next/image'
import styles from '../style/Home.module.css'
import HTMLContent_Convert from './DOMPurify';

export default function HomeBillboardCTA({pageData}) {
  return (
    <div className='container mx-auto pt-10 pb-15 px-5'>
    <div className={`${styles.blueSec_Bottom} text-white px-8 py-5 rounded-xl flex flex-col md:flex-row items-start justify-between gap-6`}>
      {/* Left Section */}
      <div className={`flex-1 ${styles.blueSec_Bottom}`}>
        
      <HTMLContent_Convert content={pageData || ''} />

      </div>

      {/* Right Section */}
      <div className={`flex justify-center ${styles.imgSecBottom}`}>
        <img
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
