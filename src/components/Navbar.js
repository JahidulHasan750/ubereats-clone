import React from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsCart, BsCartFill, BsFillSaveFill } from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUser, FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite,MdHelp} from 'react-icons/md'
import { useState } from 'react'

const Navbar = () => {
    const [nav,setNav]= useState(false);
  return (
    <div className='max-w-[1640px] mx-auto flex items-center justify-between p-4 '>
        <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer' >
            <AiOutlineMenu size={30}></AiOutlineMenu>
           
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span></h1>
        <div className='hidden lg:flex items-center  rounded-full bg-gray-200 p-1 text-[14px] hover:cursor-pointer'>
            <p className='rounded-full bg-black text-white p-2'>Delivery</p>
            <p className='p-2'>Pickup</p>
        </div>
        </div>
        <div className='bg-gray-200 rounded-full flex
        items-center px-2 w-[200px] sm:[400px] lg:w-[550px]'>
            <AiOutlineSearch size={25}></AiOutlineSearch>
            <input className='bg-transparent p-2 focus: outline-none' placeholder='Search foods'></input>
        </div>
        <div>
            <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
            <BsCartFill size={20} className='mr-2'></BsCartFill>Cart </button>
        </div>
        {nav? <div className='bg-black/80 fixed h-screen w-full z-10 top-0 left-0'></div>:''}
        <div className={nav?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={()=>setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'> </AiOutlineClose>
            <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
            <nav>
                <ul className=' flex flex-col p-4'>
                    <li className='flex gap-1 text-xl py-4 hover:cursor-pointer'><TbTruckDelivery size={30}></TbTruckDelivery>Orders</li>
                    <li className='flex gap-1 text-xl py-4 hover:cursor-pointer'><MdFavorite size={30}></MdFavorite> Favorites</li>
                    <li className='flex gap-1 text-xl py-4 hover:cursor-pointer'><FaWallet size={30}></FaWallet> Wallet</li>
                    <li className='flex gap-1 text-xl py-4 hover:cursor-pointer'><MdHelp size={30}></MdHelp> Help</li>
                    <li className='flex gap-1 text-xl py-4 hover:cursor-pointer'><AiFillTag size={30}></AiFillTag> Promotions</li>
                    <li className='flex gap-1 text-xl py-4 hover:cursor-pointer'><BsFillSaveFill size={30}></BsFillSaveFill> Best ones</li>
                    <li className='flex gap-1 text-xl py-4 hover:cursor-pointer'><FaUser size={30}></FaUser> Invite friends</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar