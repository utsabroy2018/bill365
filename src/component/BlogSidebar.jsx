import React, { useEffect, useState } from 'react'
import styles from '../style/Blog.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

function BlogSidebar({articles}) {


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

        {/* <section className={styles.blogWidget}>
		<h2 className="widget-title">Related Posts</h2>
        <ul>
        <li><a href="#" aria-current="page">Why is GST billing software important for businesses in India?</a></li>
        <li><a href="#" aria-current="page">Why is GST billing software important for businesses in India?</a></li>
        <li><a href="#" aria-current="page">Why is GST billing software important for businesses in India?</a></li>
        <li><a href="#" aria-current="page">Why is GST billing software important for businesses in India?</a></li>
        </ul>
		</section>

        <section className={styles.blogWidget}>
		<h2 className="widget-title">Tag</h2>
        <div className={styles.tag_link}>
        <a href="#" className="tag-cloud-link tag-link-172 tag-link-position-11">#gstbillingsoftware</a>
        <a href="#" className="tag-cloud-link tag-link-172 tag-link-position-11">#gstbillingsoftware</a>
        <a href="#" className="tag-cloud-link tag-link-172 tag-link-position-11">#gstbillingsoftware</a>
        </div>
		</section> */}

    </div>
  )
}

export default BlogSidebar