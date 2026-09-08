import React from 'react'
import Header from '../../components/header/header/Header'
import Hero from '../../components/hero/Hero'
import HeroBottom from '../../components/HeroBottom/HeroBottom'
import Blog from '../../components/blog/Blog'
import NewProducts from '../../components/newProducts/NewProducts'
import FeaturedProduct from '../../components/featueredProduct/FeaturedProduct'
import Brand from '../../components/brand/Brand'
import Testimonial from '../../components/testimonial/Testimonial'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <HeroBottom />
        <NewProducts />
        <Testimonial />
        <FeaturedProduct /> 
        <Brand />       
         <Blog />
        <Footer />
    </div>
  )
}

export default Home