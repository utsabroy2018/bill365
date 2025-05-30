// "use client"
// import React, { useEffect, useState } from 'react'
import styles from '../style/Blog.module.css'
import Link from 'next/link'
// import { useRouter } from 'next/navigation';

export default async function BlogSidebar({articles}) {


  return (
    <div className={styles.serviceListBlog}>
        {/* {JSON.stringify(articles, null, 2)}  */}
        <section className={styles.blogWidget}>
		<h2 className="widget-title">Recent Posts</h2>
        <ul>
        {articles.slice(0, 5).map((item, i) => (
        <li>
        <Link href={`/blog/${item?.id}`} aria-current="page">
        {item?.slug}
        </Link>
        </li>
        ))}
        </ul>
		</section>

        

    </div>
  )
}

// export default BlogSidebar