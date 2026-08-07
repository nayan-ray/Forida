import React from 'react'
import "./blog.css"
import blogBanner from "../../../assets/3-home-default.jpg"

const Blog = () => {
  return (
    <div>
        <div className="blog-container">
            <img className="blog-img" src={blogBanner} alt="Blog Banner" />
        </div>
    </div>
  )
}

export default Blog