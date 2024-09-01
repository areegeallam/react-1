import React from 'react'

export default function Footer() {
  return (
   <>
   <div className="bottom-0  right-0 left-0 bg-gray-600 flex flex-wrap justify-around py-10"> 
        <div className="w-full:text-center p-10 md:w-1/2 lg:w-1/3">     
        <div className="ms-10">
        <h3 className='text-4xl'>LOCATION</h3>
        <p className=''>2215 John Daniel Drive</p>
        <p className='px-3'>Clark, MO 65243</p>
        </div>
        </div>
        <div className="w-full:text-center p-10 md:w-1/2 lg:w-1/3">        
            <h3 className='text-4xl'>AROUND THE WEB</h3>
            <div className="text-center">
            <i class="icon fa-brands fa-facebook"></i>
            <i class="icon fa-brands fa-twitter"></i>
            <i class="icon fa-brands fa-linkedin"></i>
            <i class="icon fa-solid fa-globe"></i>
            </div>
        </div>
        <div className="w-full:text-center p-10 md:w-1/2 lg:w-1/3">      
        <h3 className='text-4xl'>ABOUT FREELANCER</h3>
        <p className=''>Freelance is a free to use, licensed Bootstrap</p>
        <p className='text-center  '>theme created by Route</p>
        </div>
    </div>
    
  

   <div className=" h-20 bg-slate-800 w-100 text-center text-white">
    <p className='pt-6'>Copyright © Your Website 2021</p>
   </div>
   </>
  )

}
