import React from 'react'
import { Search, Heart, ShoppingCart, RefreshCw, Star } from 'lucide-react';

const FeaturedItem = ({baseImg, hoverImg, title, newPrice, oldPrice}) => {
  return (
    <div className="px-3.75">
            <div className="max-w-67.5 mx-auto group relative cursor-pointer">
              <div className="relative">
                <img
                  className="w-full h-full object-cover relative z-1"
                  src={baseImg}
                  alt="New Product"
                />
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover z-2 transform scale-0 transition-all duration-1000 group-hover:scale-100"
                  src={hoverImg}
                  alt="New Product"
                />
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
                <h4 className="text-[15px] font-poppins font-normal text-[#111] hover:text-[#f70b38]">
                 {title}
                </h4>
                <div className="flex items-center justify-between mt-1.5">
                  <div>
                    <span className="mr-3 text-[15px] font-poppins font-normal text-[#111]">
                      {newPrice}
                      
                    </span>
                    <span className="line-through">{oldPrice}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 text-[#f70b38]" />
                    <Star className="w-3 h-3 text-[#f70b38]" />
                    <Star className="w-3 h-3 text-[#f70b38]" />
                    <Star className="w-3 h-3 text-[#f70b38]" />
                    <Star className="w-3 h-3 text-[#f70b38]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default FeaturedItem