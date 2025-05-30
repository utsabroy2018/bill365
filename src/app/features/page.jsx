import styles from '../../style/Feature.module.css';
import Link from 'next/link';
import HTMLContent_Convert from '@/component/DOMPurify';
import { BaseUrl } from '../config';

export default async function Features() {
  const res = await fetch(`${BaseUrl}wp-json/wp/v2/pages/820`, {
    cache: 'no-store', // You can change this to `force-cache` or `revalidate` based on your caching needs
  });
  const pageData = await res.json();

  return (
    <>
      <div
        className={`w-full ${styles.banner_sec_inner}`}
        style={{
          backgroundImage: `url(${pageData?.acf?.inner_page_banner?.banner_image?.url || ''})`,
        }}
      >
        <div className={`container mx-auto px-4 sm:px-6 ${styles.banner_padd_Inner}`}>
          <div className={`${styles.banner_sec_content_inner}`}>
            <HTMLContent_Convert
              className={`${styles.banner_sec_content_inner}`}
              content={pageData?.acf?.inner_page_banner?.banner_text || ''}
            />
            <p><Link href="/contact">Get Started</Link></p>
          </div>
        </div>
      </div>

      <div className="w-full mt-10">
        <div className={`container mx-auto px-4 sm:px-6 ${styles.section_text_Inner}`}>
          <div className={`grid grid-cols-6 gap-4 py-10 ${styles.grid_cols_6}`}>
            <div className="col-span-4 col-start-2 px-4 flex items-center justify-center">
              <HTMLContent_Convert
                className={`${styles.banner_sec_content_inner}`}
                content={pageData?.content?.rendered || ''}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto ${styles.developmentSec}`}>
        {pageData?.acf?.box_with_icon_group?.box_with_icon_repeater?.map((item, index) => (
          <div key={index} className={styles.box_sec_4}>
            <div className={`${styles.box}`}>
              <div className={`${styles.icon}`}>
                <span>
                  <img
                    src={item?.upload_image?.url}
                    alt={`Image ${index + 1}`}
                    className="w-full h-auto max-w-md object-cover"
                  />
                </span>
              </div>
              <HTMLContent_Convert content={item?.box_content || ''} />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mt-10">
        {pageData?.acf?.left_and_right_image_text?.left_and_right_repeater?.map((item, index) => (
          <div
            key={index}
            className={`container mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row ${styles.row_custom} ${styles.section_text_Inner} ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center`}
          >
            <div className={`md:w-1/2 w-full px-4 flex justify-center ${styles.imgSec_text}`}>
              <img
                src={item?.image_upload?.url}
                alt={`Image ${index + 1}`}
                className="w-full h-auto max-w-md object-cover"
              />
            </div>

            <div className="md:w-1/2 w-full px-4 flex">
              <HTMLContent_Convert
                className={`${styles.banner_sec_content_inner}`}
                content={item?.text_section || ''}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
