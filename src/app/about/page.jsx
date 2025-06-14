import styles from '../../style/About.module.css'
import HTMLContent_Convert from '@/component/DOMPurify';
import Link from 'next/link';
import { BaseUrl } from '../config'

async function fetchPageData() {
  const res = await fetch(`${BaseUrl}wp-json/wp/v2/pages/8`, {
    // cache: 'no-store',
    next: {
      revalidate: 10 // fetch data after every 10 sec
    },
  });
  const data = await res.json();
  return data;
}

async function fetchMediaData(mediaUrl) {
  const res = await fetch(mediaUrl, { cache: 'no-store' });
  const data = await res.json();
  return data;
}

export default async function About() {
  const pageData = await fetchPageData();
  const featuredMedia = pageData?._links?.["wp:featuredmedia"]?.[0]?.href;
  const mediaData = featuredMedia ? await fetchMediaData(featuredMedia) : null;

  return (
    <>
      <div className={`w-full ${styles.banner_sec_inner}`} style={{ backgroundImage: `url(${pageData?.acf?.inner_page_banner?.banner_image?.url || ''})` }}>
        <div className={`container mx-auto px-4 sm:px-6 ${styles.banner_padd_Inner}`}>
          <div className={`${styles.banner_sec_content_inner}`}>
            <HTMLContent_Convert content={pageData?.acf?.inner_page_banner?.banner_text || ''} />
            <p><Link href={`/contact`}> Get Started </Link></p>
          </div>
        </div>
      </div>

      <div className={`w-full mt-10`}>
        <div className={`container mx-auto px-4 sm:px-6 ${styles.section_text_Inner}`}>
          <div className={`grid grid-cols-5 gap-4 py-10 ${styles.row_custom} ${styles.grid_cols_5}`}>
            <div className='col-span-3 px-4 flex items-center justify-center'>
              <HTMLContent_Convert content={pageData?.content?.rendered || ''} />
            </div>
            <div className={`col-span-2 px-4 flex items-center justify-center ${styles.imgSec_text}`}>
              <img
                src={mediaData?.source_url}
                alt="Featured"
                className="w-full h-auto max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-10">
        {pageData?.acf?.left_and_right_image_text?.left_and_right_repeater?.map((item, index) => (
          <div key={index} className={`container mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row ${styles.row_custom} ${styles.section_text_Inner} ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center`}>
            <div className={`md:w-1/2 w-full px-4 flex justify-center ${styles.imgSec_text}`}>
              <img
                src={item?.image_upload?.url}
                alt={`Image ${index + 1}`}
                className="w-full h-auto max-w-md object-cover"
              />
            </div>
            <div className="md:w-1/2 w-full px-4 flex">
              <HTMLContent_Convert content={item?.text_section || ''} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
