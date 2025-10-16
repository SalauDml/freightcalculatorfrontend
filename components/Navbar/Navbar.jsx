"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { TbWorld } from "react-icons/tb";
import Button from './Button';

function Navbar() {
    const [language,setLanguage] = useState("en");
    const handleChange = (e) => {
        setLanguage(e.target.value);
    }
  return (
    <div className="w-dvw h-20 bg-gray-950 flex justify-between px-15 ">
      <div className="h-full grid grid-cols-[auto_1fr] items-center gap-3">
        {/* Logo */}
        <div className="relative w-[40px] h-[40px]">
          <Image
            src="/img/icon.png"
            alt="Icon for Freight Calculator"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-white font-semibold text-lg">Cargo Credible</p>
          <p className='text-sm text-gray-500 font-light '>Advanced Rate Calculator </p>
        </div>
      </div>

      <div className='flex justify-center items-center gap-2'>
        <div className='h-full flex items-center'>
            <TbWorld/>
            <select value={language} onChange={handleChange} className='pl-5 text-white text-left'>
            <option className='text-black' value="en">English</option>
            <option className='text-black' value="fr">France</option>
            <option value="es">Spanish</option>
            </select>
        </div>
        <Button text = "Sign In"/>
      </div>
    </div>
  );
}

export default Navbar;



