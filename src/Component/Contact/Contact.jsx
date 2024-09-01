import React, { useState } from 'react'

export default function Contact() {

  return (
   <>
   <div className="text-center pt-10 p-3">
    <h2 className='text-5xl'>CONATCT SECTION</h2>
    <div className="flex justify-center">
      <div className="h-1 w-20 bg-black mt-10"></div>
      <i className="fa-solid fa-star mt-5 px-10 text-5xl"></i>
      <div className="h-1 w-20 bg-black mt-10"></div>
    </div>
  
    <div className="container px-24 ">
    <form action="">
    <input type="text" className='contact w-full  my-2 mt-10' placeholder='userName' />
    <input type="text" className=' contact w-full my-2' placeholder='userAge' />
    <input type="Email" className='contact w-full my-2' placeholder='userEmail' />
    <input type="Password" className='contact w-full my-2' placeholder='userPassword' />
    <div className="mt-2"><button className='btn'>Send massage</button></div>
    </form>

    </div>
   </div>
   </>
  )
}
