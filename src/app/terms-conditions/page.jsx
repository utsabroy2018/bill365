// app/terms/page.tsx (Server Component)
import HTMLContent_Convert from '@/component/DOMPurify'
import styles from '../../style/About.module.css'
import { BaseUrl } from '../config'

async function getPageData() {
  const res = await fetch(`${BaseUrl}wp-json/wp/v2/pages/2717`, {
    next: { revalidate: 60 } // Optional: revalidate every 60 seconds
  });
  return res.json();
}

export default async function Terms_Conditions() {
  const pageData = await getPageData();

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
            <HTMLContent_Convert content={pageData?.acf?.inner_page_banner?.banner_text || ''} />
          </div>
        </div>
      </div>

      <div className={`w-full mt-10`}>
        <div className={`container mx-auto px-4 sm:px-6 ${styles.section_text_Inner}`}>
          <div className='grid grid-cols-5 gap-4 py-10'>
            <div className='col-span-5 px-4 flex items-center justify-left'>
              <HTMLContent_Convert content={pageData?.content?.rendered || ''} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-10">
        {pageData?.acf?.left_and_right_image_text?.left_and_right_repeater.map((item, index) => (
          <div
            key={index}
            className={`container mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row ${
              styles.section_text_Inner
            } ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center`}
          >
            <div className="md:w-1/2 w-full px-4 flex justify-center">
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
