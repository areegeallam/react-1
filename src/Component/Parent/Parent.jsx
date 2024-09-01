import React from 'react'
import logo from "./../../assets/download.png"

export default function Parent() {
  return (
    <>
    <div className="bg-emerald-400 text-center">
       <div className="w-60 mx-auto pt-10 ">
       <img src={logo} alt="" className='w-full border rounded-full' />
       </div>
       <h2 className='text-5xl text-black font-bold pt-10'>START FRAMEWORK</h2>
       <div className="flex justify-center">
       <div className="h-1 w-20 bg-white mt-10"></div>
      <i className="fa-solid fa-star mt-8 px-10 text-white text-2xl"></i>
      <div className="h-1 w-20 bg-white mt-10"></div>
      </div>   
      <p className='text-center pb-10'>Graphic Artist - Web Designer - Illustrator</p>  
    </div>
    </>
  )
}
