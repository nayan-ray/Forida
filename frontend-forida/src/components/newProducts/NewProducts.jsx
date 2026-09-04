import React, {useState} from 'react'
import product1 from '../../assets/viverra-non-semper1.jpg'
import product2 from '../../assets/viverra-non-semper2.jpg'
import product3 from '../../assets/lorem-ipsum-dolor (1).jpg'
import product4 from '../../assets/lorem-ipsum-dolor (2).jpg'
import product5 from '../../assets/suspendisse-urna1.jpg'
import product6 from '../../assets/suspendisse-urna2.jpg'
import product7 from '../../assets/posuere-a-pede1.jpg'
import product8 from '../../assets/posuere-a-pede2.jpg'


import { Search, Heart, ShoppingCart, RefreshCw, Star } from 'lucide-react';

const NewProducts = () => {
    const [activeTab, setActiveTab] = useState('New arrivals');
    const tabItems = [
        {
            id:1,
            title: 'New arrivals',
        },
        {
            id:2,
            title: 'OnSale',
        },
        {
            id:3,
            title: 'BestSellers',
        },
        {
            id:4,
            title: 'Trends',
        },

    ]

    const products = [
        {
            baseImage: product1,
            hoverImage: product2,
            title: 'One shoulder bow top',
            price: '$29.99',
            oldPrice: '$39.99',
            rating: 5,
            tab: 'New arrivals',
        },
        {
            baseImage: product3,
            hoverImage: product4,
            title: 'Slim fit jeans',
            price: '$49.99',
            oldPrice: '$59.99',
            rating: 4,
            tab: 'OnSale',
        },
        {
            baseImage: product5,
            hoverImage: product6,
            title: 'Casual t-shirt',
            price: '$19.99',
            oldPrice: '$29.99',
            rating: 4,
            tab: 'BestSellers',
        },
        {
            baseImage: product7,
            hoverImage: product8,
            title: 'Summer dress',
            price: '$39.99',
            oldPrice: '$49.99',
            rating: 5,
            tab: 'Trends',
        },
        {
            baseImage: product1,
            hoverImage: product2,
            title: 'Casual hoodie',
            price: '$34.99',
            oldPrice: '$44.99',
            rating: 4,
            tab: 'Trends',
        },
        {
            baseImage: product3,
            hoverImage: product4,
            title: 'Slim fit jeans',
            price: '$49.99',
            oldPrice: '$59.99',
            rating: 4,
            tab: 'New arrivals',
        },
        {
            baseImage: product5,
            hoverImage: product6,
            title: 'Casual t-shirt',
            price: '$19.99',
            oldPrice: '$29.99',
            rating: 4,
            tab: 'New arrivals',
        },
        {
            baseImage: product7,
            hoverImage: product8,
            title: 'Summer dress',
            price: '$39.99',
            oldPrice: '$49.99',
            rating: 5,
            tab: 'New arrivals',
        }

    ]


  return (
    <div className="mb-20">
        <div className="w-full mx-auto z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330">
             <div className="flex items-center justify-center flex-wrap px-3.75 gap-4 mb-10">
                {tabItems.map((item, index) => (
                    <div key={index} className='inline-block p-0.5 border-2 border-solid border-transparent hover:border-2 hover:border-solid hover:border-[#111]' onClick={()=> setActiveTab(item.title)}>
                        <button className={`text-[#666666] font-normal font-poppins tracking-[0.02em] uppercase py-1 px-4 border-2 border-solid ${activeTab === item.title ?  'border-[#111]' : 'border-transparent '}`}>
                            {item.title}
                        </button>
                    </div>
                ))}
                
             </div>
              
             <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3.75 gap-y-8">
                {products.filter(product => product.tab === activeTab).map((product, index)=>{
                    return (
                        <div key={index} className="w-full ">
                    <div className="max-w-67.5 mx-auto group relative cursor-pointer">
                       <div className="relative">
                        <img className='w-full h-full object-cover relative z-1' src={product.baseImage} alt="New Product"  />
                        <img className='absolute top-0 left-0 w-full h-full object-cover z-2 transform scale-0 transition-all duration-1000 group-hover:scale-100' src={product.hoverImage} alt="New Product"  />
                        <div className="absolute z-3 top-1/2 left-0 -translate-y-1/2 w-full text-center bg-contentBox py-4 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-1000 group-hover:ease-in-out">
                             <div className="flex items-center justify-center gap-2">
                                 <div className="w-10 h-10 flex items-center justify-center cursor-pointer border-2 border-solid border-white transition-all duration-1000 hover:bg-[#f70b38]  hover:border-[#f70b38] transform scale-0 group-hover:scale-100">
                                     <Search className="text-white w-5 h-5" />
                                 </div>
                                 <div className="w-10 h-10 flex items-center justify-center cursor-pointer border-2 border-solid border-white transition-all duration-1000 hover:bg-[#f70b38]  hover:border-[#f70b38] transform scale-0 group-hover:scale-100">
                                     <Heart className="text-white w-5 h-5" />
                                 </div>

                                 <div className="w-10 h-10 flex items-center justify-center cursor-pointer border-2 border-solid border-white transition-all duration-1000 hover:bg-[#f70b38]  hover:border-[#f70b38] transform scale-0 group-hover:scale-100">
                                     <RefreshCw className="text-white w-5 h-5" />
                                 </div>
                                 <div className="w-10 h-10 flex items-center justify-center cursor-pointer border-2 border-solid border-white transition-all duration-1000 hover:bg-[#f70b38]  hover:border-[#f70b38] transform scale-0 group-hover:scale-100">
                                     <ShoppingCart className="text-white w-5 h-5" />
                                 </div>
                             </div>
                        </div>
                       </div>
                       <div className="mt-3">
                          <h4 className='text-[15px] font-poppins font-normal text-[#111] hover:text-[#f70b38]'>{product.title}</h4>
                          <div className="flex items-center justify-between mt-1.5">
                            <div>
                                <span className='mr-3 text-[15px] font-poppins font-normal text-[#111]'> {product.price}</span> <span className='line-through'>{product.oldPrice}</span>
                            </div>
                            <div className="flex items-center gap-0.5">
                                <Star className='w-3 h-3 text-[#f70b38]' />
                                <Star className='w-3 h-3 text-[#f70b38]' />
                                <Star className='w-3 h-3 text-[#f70b38]' />
                                <Star className='w-3 h-3 text-[#f70b38]' />
                                <Star className='w-3 h-3 text-[#f70b38]' />
                            </div>
                          </div>
                       </div>
                   </div>
                </div>
                    )
                })}
                



               



               


                              


                   
             </div>
        </div>
    </div>
  )
}

export default NewProducts