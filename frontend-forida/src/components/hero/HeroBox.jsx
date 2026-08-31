import React from 'react'

const HeroBox = ({index, slide}) => {
   
    if((index + 1) % 2 !== 0){
 return (
    <div className='w-[80%] mx-auto h-full flex items-center justify-start'>
       <div className='w-1/2'>
             <h3 className='text-[30px] font-poppins font-medium text-white mb-2'>{slide.title}</h3>
              <h1 className='text-[60px] font-poppins font-semibold text-white mb-4 uppercase leading-16.25'>{slide.description}</h1>
              <p className='text-[16px] font-poppins font-light text-white mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, molestias nobis! Odio reprehenderit vitae .</p>
              <button className='btn'>SHOP NOW</button>
       </div>
        
    </div>
  )
    }else{
        return (
    <div className='w-[80%] mx-auto h-full flex items-center justify-start flex-row-reverse'>
       <div className='w-1/2 text-right'>
             <h3 className='text-[30px] font-poppins font-medium text-white mb-2'>{slide.title}</h3>
              <h1 className='text-[60px] font-poppins font-semibold text-white mb-4 uppercase leading-16.25'>{slide.description}</h1>
              <p className='text-[16px] font-poppins font-light text-white mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, molestias nobis! Odio reprehenderit vitae .</p>
              <button className='btn'>SHOP NOW</button>
       </div>
        
    </div>
  )
    }

 
}

export default HeroBox