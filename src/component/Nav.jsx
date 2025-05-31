import React from 'react'
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";




function Nav() {
  return (
    <>
    <nav className=' navbar w-full bg-[#54c7bf] h-[5rem] flex justify-between items-center'>
        <div>
          <p className='text-5xl flex  text-#999999] font-bold'>Be<span className='flex  items-center text-white'>Ballsy</span></p>
        </div>
        <div className='nav flex text-2xl text-white gap-[20px] p-[50px] '>
           <div className='nav-items'>About</div>
           <div className='nav-items'>Services</div>
          <div className='nav-items'>Product</div>
           <div className='nav-items'>Resources</div>
        </div>
     
        
    </nav>
    </>
  )
}

export default Nav