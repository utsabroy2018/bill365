// app/privacy-policy/page.tsx (or .jsx)
import sanitizeHtml from 'sanitize-html';
import styles from '../../style/About.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { BaseUrl } from '../config';

async function getPageData() {
  const res = await fetch(`${BaseUrl}wp-json/wp/v2/pages/2715`, {
    next: { revalidate: 60 }, // optional ISR
  });
  return res.json();
}

function HTMLContent_Convert({ content = '', className = '' }) {
  const cleanHTML = sanitizeHtml(content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ['src', 'alt'],
    },
  });

  return <div className={className} dangerouslySetInnerHTML={{ __html: cleanHTML }} />;
}

export default async function PrivacyPolicy() {
  const pageData = await getPageData();

  const bannerImage = pageData?.acf?.inner_page_banner?.banner_image?.url || '';
  const bannerText = pageData?.acf?.inner_page_banner?.banner_text || '';
  const mainContent = pageData?.content?.rendered || '';
  const repeater = pageData?.acf?.left_and_right_image_text?.left_and_right_repeater || [];

  return (
    <>
      {/* Banner */}
      <div className={`w-full ${styles.banner_sec_inner}`} style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className={`container mx-auto px-4 sm:px-6 ${styles.banner_padd_Inner}`}>
          <div className={`${styles.banner_sec_content_inner}`}>
            <HTMLContent_Convert className={styles.banner_sec_content_inner} content={bannerText} />
            <p><Link href="/contact">Get Started</Link></p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`w-full mt-10`}>
        <div className={`container mx-auto px-4 sm:px-6 ${styles.section_text_Inner}`}>
          <div className="grid grid-cols-5 gap-4 py-10">
            <div className="col-span-5 px-4 flex items-center justify-left">
              <HTMLContent_Convert content={mainContent} />
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
