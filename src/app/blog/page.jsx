import { BentoGridThirdDemo } from '@/component/BlogList'
import BlogSidebar from '@/component/BlogSidebar'
import styles from '../../style/Blog.module.css'
import { BaseUrl } from '../config'

async function fetchNews() {
  try {
    const res = await fetch(`${BaseUrl}wp-json/wp/v2/posts?_embed&per_page=100&page=1`, {
      cache: 'no-store', // disables caching if needed
    });
    if (!res.ok) throw new Error('Failed to fetch');
    return await res.json();
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export default async function Blog() {
  const articles = await fetchNews();

  return (
    <div className="container mx-auto">
      <div className={styles.blogMain}>
        <div className={`px-4 ${styles.blogLeftBar}`}>
          <BentoGridThirdDemo articles={articles} />
        </div>
        <div className={`px-4 ${styles.sideBarBlog}`}>
          <BlogSidebar articles={articles} />
        </div>
      </div>
    </div>
  );
}
