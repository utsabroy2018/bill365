'use client'
import React from 'react'
// import { useRouter } from 'next/router'
import { useParams } from 'next/navigation'

function blogdetails(props) {
    const params = useParams();
    const blogdetails = params.blogdetails

console.log(blogdetails, 'props', useParams);

  return (
    <div>Blog Details = {blogdetails}</div>
  )
}

export default blogdetails