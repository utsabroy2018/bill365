import React from 'react'
import styles from '../style/Home.module.css'
import HTMLContent_Convert from './DOMPurify'

function HomeBlueSection({pageData}) {
  return (
    <>
    {/* <div className={`w-full py-10 bg-indigo-800 ${styles.blueSec}`}>
    <div className={`container mx-auto py-10 ${styles.blue_txt}`}>
     <div className={`grid grid-cols-6 gap-4`}>
     <div className="col-span-3 col-start-1">
      <HTMLContent_Convert content={pageData || ''} />
        </div>
        </div>
        </div>
        </div> */}

        <div className={`w-full py-10 bg-indigo-800 ${styles.blueSec}`}>
    <div className={`container mx-auto py-10 ${styles.blue_txt}`}>
     <div className={styles.container}>
     <div className={`${styles.row} ${styles.blueSec_flex}`}>
      <div className={` ${styles.text_align_left} ${styles.blue_txt}`}>
      <HTMLContent_Convert content={pageData || ''} />
      </div>
        </div>
        </div>
        </div>
        </div>

 
    </>
  )
}

export default HomeBlueSection