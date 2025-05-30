import styles from '../../style/Contact.module.css';
import HTMLContent_Convert from '@/component/DOMPurify';
import { BaseUrl } from '../config';

export default async function Contact() {
  const res = await fetch(`${BaseUrl}wp-json/wp/v2/pages/324`, {
    cache: 'no-store', // or use `next.revalidate` if caching
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
          </div>
        </div>
      </div>

      <div className="w-full mt-10">
        <div className={`container mx-auto px-4 sm:px-6 py-10 ${styles.section_text_Inner}`}>
          <HTMLContent_Convert
            className={`${styles.banner_sec_content_inner}`}
            content={pageData?.content?.rendered || ''}
          />
        </div>
      </div>
    </>
  );
}
