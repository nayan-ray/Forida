import React from 'react'
import Accessories from '../../components/testCom/Accessories'
import Card from '../../components/testCom/card/Card'
import Product from '../../components/testCom/Product/Product'
import Blog from '../../components/testCom/blog/Blog'

import "../../App.css"
import Logo from '../../components/testCom/logo/Logo'
import TitleBorder from '../../components/testCom/TitleBorder/TitleBorder'

const TestWithCss = () => {
  return (
    <div className ="Container">
        <Accessories />
        <Card />
        <Product />
        <Blog />
        <Logo />
        <TitleBorder />
    </div>
  )
}

export default TestWithCss