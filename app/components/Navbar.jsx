
"use client"

import { useState } from "react"

export default function Navbar() {
const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="w-full top-0 absolute z-50">
      <div className="hidden md:block w-full p-8">
        <nav className="text-white flex ml-12 gap-8 relative">
            <img src="/images/logo.svg" className="w-24 h-auto" alt="room-logo" />
            <a className="hover:border-b-2 hover:transition-all after:duration-300" href="/">home</a>
            <a className="hover:border-b-2 hover:transition-all after:duration-300" href="#">shop</a>
            <a className="hover:border-b-2 hover:transition-all after:duration-300" href="#">about</a>
            <a className="hover:border-b-2  hover:transition-all after:duration-300" href="#">contact</a>
        </nav>
      </div>

      <div className="md:hidden md:p-5">
        
        {!openMenu ? 
            <div className="p-8 flex items-center transition-all duration-300 ease-in-out">
                <div className="w-1/3">
                    <button className="left-0" onClick={() => setOpenMenu(true)}>
                        <img src="/images/icon-hamburger.svg" className={`top-0 cursor-pointer`} alt="burger-bar" />
                    </button> 
                </div>
                
                <div className="flex w-1/3 justify-center items-center">
                    <img src="/images/logo.svg" className="w-24 h-auto" alt="room-logo" />    
                </div>
            </div>
              
            :

            <div className="flex justify-between bg-white w-full transition-all duration-300 ease-in-out px-5 py-8">
                <button href="" onClick={() => setOpenMenu(false)}>
                    <img src="/images/icon-close.svg" alt="close-button" className="color-secondary"/>
                </button>

                <nav className="flex gap-8">
                    <a className="font-bold hover:border-b-2 hover:transition-all after:duration-300" href="/">home</a>
                    <a className="font-bold hover:border-b-2 hover:transition-all after:duration-300" href="#">shop</a>
                    <a className="font-bold hover:border-b-2 hover:transition-all after:duration-300" href="#">about</a>
                    <a className="font-bold hover:border-b-2  hover:transition-all after:duration-300" href="#">contact</a>
                </nav>
            </div>

        }
        
      </div>
    </header>
  )
}
