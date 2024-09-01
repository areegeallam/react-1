import React from 'react'
import img1 from "./../../assets/poert1.png"
import img2 from "./../../assets/port2.png"
import img3 from "./../../assets/port3.png"

export default function Protofile() {
  return (
   <>
   <div className="text-center pt-8">
    <h2 className='text-5xl text-black font-bold'>PORTFOLIO COMPONENT</h2>
   <div className="flex justify-center">
      <div className="h-1 w-20 bg-black mt-10"></div>
      <i className="fa-solid fa-star mt-5 px-10 text-5xl"></i>
      <div className="h-1 w-20 bg-black mt-10"></div>
    </div>
   </div>
   <div className="flex flex-wrap">
   <div className=" w-full p-10 md:w-1/2 lg:w-1/3 ">
    <div className="main">
    <img src={img1} className='img w-full' alt="" />
    <div className="layer w-full flex center"><i class="fa-solid fa-plus text-8xl m-auto text-center text-white"></i></div>
    </div>
   </div>
   <div className="w-full p-10 md:w-1/2 lg:w-1/3 ">
   <div className="main">
    <img src={img2} className='img w-full' alt="" />
    <div className="layer w-full flex center"><i class="fa-solid fa-plus text-8xl m-auto text-center text-white"></i></div>
    </div>
   </div>
   <div className="w-full p-10 md:w-1/2 lg:w-1/3 ">
   <div className="main">
    <img src={img3} className='img w-full' alt="" />
    <div className="layer w-full flex center"><i class="fa-solid fa-plus text-8xl m-auto text-center text-white"></i></div>
    </div>
   </div>
   </div>
   <div className="flex flex-wrap">
   <div className="w-full p-10 md:w-1/2 lg:w-1/3 ">
   <div className="main">
    <img src={img1} className='img w-full' alt="" />
    <div className="layer w-full flex center"><i class="fa-solid fa-plus text-8xl m-auto text-center text-white"></i></div>
    </div>
   </div>
   <div className="w-full p-10 md:w-1/2 lg:w-1/3 ">
   <div className="main">
    <img src={img2} className='img w-full' alt="" />
    <div className="layer w-full flex center"><i class="fa-solid fa-plus text-8xl m-auto text-center text-white"></i></div>
    </div>
   </div>
   <div className="w-full p-10 md:w-1/2 lg:w-1/3 ">
   <div className="main">
    <img src={img3} className='img w-full' alt="" />
    <div className="layer w-full flex center"><i class="fa-solid fa-plus text-8xl m-auto text-center text-white"></i></div>
    </div>
   </div>
   </div>
  
   </>
  )
}
