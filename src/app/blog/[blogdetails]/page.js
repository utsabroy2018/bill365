import { htmlToText } from 'html-to-text';
import styles from '../../../style/Blog.module.css'
import BlogSidebar from '@/component/BlogSidebar';
import { BaseUrl } from '@/app/config';
import Image from "next/image";

async function fetchPostDetails(blogId) {
  const res = await fetch(`${BaseUrl}wp-json/wp/v2/posts/${blogId}`, { cache: 'no-store' });
  return await res.json();
}

async function fetchMedia(mediaId) {
  const res = await fetch(`${BaseUrl}wp-json/wp/v2/media/${mediaId}`, { cache: 'no-store' });
  return await res.json();
}

async function fetchSidebarPosts() {
  const res = await fetch(`${BaseUrl}wp-json/wp/v2/posts`, { cache: 'no-store' });
  return await res.json();
}

export default async function Blogdetails({ params }) {
  const blogId = params.blogdetails;

  const article = await fetchPostDetails(blogId);
  const sidebarArticles = await fetchSidebarPosts();

  let featuredImg = '';
  if (article.featured_media) {
    const mediaData = await fetchMedia(article.featured_media);
    featuredImg = mediaData?.media_details?.sizes?.large?.source_url || '';
  }

  return (
    <div className="container mx-auto px-4">
      <div className={`${styles.blogMain}`}>
        <div className={`px-4 ${styles.blogdtlsWrap} ${styles.blogLeftBar}`}>
          <div className={`${styles.leftDetails}`}>
            {featuredImg && (
              <img
                src={featuredImg}
                className="rounded-xs w-full h-full object-cover mb-5"
                alt="Featured"
              />
            )}
            <h1>{htmlToText(article?.title?.rendered || '', { wordwrap: false })}</h1>
            <div dangerouslySetInnerHTML={{ __html: article?.content?.rendered || '' }} />
          </div>
        </div>
        <div className={`px-4 ${styles.sideBarBlog}`}>
          <BlogSidebar articles={sidebarArticles} />
        </div>
      </div>
    </div>
  );
}
