import React from 'react'
import Accessories from '../../components/testCom/Accessories'
import Card from '../../components/testCom/card/Card'
import Product from '../../components/testCom/Product/Product'
import Blog from '../../components/testCom/blog/Blog'

import "../../App.css"

const TestWithCss = () => {
  return (
    <div className ="Container">
        <Accessories />
        <Card />
        <Product />
        <Blog />
    </div>
  )
}

export default TestWithCss