import React,{useState} from 'react'
import { FiMenu } from 'react-icons/fi'
import { FaTelegram,FaEnvelope } from 'react-icons/fa'
import {BiMenuAltRight} from 'react-icons/bi'
import {SiUpwork} from 'react-icons/si'
import {FcManager} from 'react-icons/fc'
import {IoIosArrowBack} from 'react-icons/io'
import logo from '../assets/ideal.png'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [hover, setHover] = useState(false)
  return (
    <>
        <div className='absolute z-[1000] top-0 left-0 w-full' id="top">
             <nav className='relative w-full px-[2%] z-auto left-0 mx-auto flex items-center min-h-[108px]'>
                  <div className='px-[22px] flex justify-between w-full mini:justify-center small:justify-center sm:justify-center'>
                     <div className='flex items-center'>
                        <a href="/">
                            <img className='w-auto  max-h-[50px]' src={logo} alt="logo" />
                        </a>
                     </div>
                     <div className='flex items-center gap-4 mini:hidden small:hidden sm:hidden '>
                          <div>
                                <a href="https://t.me/Ideal_Creators_Team">
                                     <div className=' text-white px-7 py-3 bg-transparent text-xs font-bold rounded-md ' style={{background: 'linear-gradient(90deg,#0095fa -20%,#00c1cd 115%)'}}>
                                         <span>GET IN TOUCH</span>
                                     </div>
                                </a>
                          </div>
                          <div className='menuani ' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                                 {
                                         hover ? <BiMenuAltRight onClick={() => setMenu(true)} className='w-8 h-7 text-white xl:block hidden cursor-pointer transition duration-700 ease-in-out'  /> : <FiMenu onClick={() => setMenu(true)} className='transition duration-700 ease-in-out w-8 h-7 text-white xl:block hidden cursor-pointer'  />
                                 }
                                 <IoIosArrowBack onClick={() => setMenu(false)} className='w-6 h-5 hidden lg:block text-white cursor-pointer' />
                          </div>
                     </div>

                  </div>
             </nav>
        </div>
        <div className={` ${menu ? "block right-0" : "hidden -right-[420px]"} rubikfont ease-in duration-1000 transition-all  bottom-0 absolute z-[9999] top w-[390px]  `} >
             <div className='close-menu' onClick={() => setMenu(false)}>
              
             </div>
             <div className='h-[100vh] w-full py-[40px] px-[25px] z-[2] bg-[#0d1424] relative inset-0 '>
                <aside className='flex flex-col gap-10 '>
                      <div className='relative'>
                             <img src={logo} alt="logo" />
                      </div>
                      
                        <div className='flex flex-col gap-5 '>
                        <div className='text-xl font-semibold text-white' style={{fontFamily: 'Nunito'}}>
                             <h4>About Us</h4>
                      </div>
                      <div >
                          <p className='m-0 text-white text-base font-normal'>Ideal Creators is a software company working in the Web3 space.</p>
                      </div>
                        </div>
                      <div className="flex flex-col gap-4">
                      <div className='flex  '>
                           <a href="https://t.me/Ideal_Creators_Team">
                           <div className="flex gap-2 items-center">
                             <div>
                                   <FaTelegram className='w-6 h-6 text-white' />
                             </div>
                             <div className='text-white text-base font-normal'>
                                <p>Send us a message!</p>
                             </div>
                           </div>
                           </a>
                      </div>
                      <div className='flex '>
                           <a href="mailto:seguntch@gmail.com">
                           <div className="flex gap-2 items-center">
                             <div>
                                   <FaEnvelope className='w-6 h-6 text-white' />
                             </div>
                             <div className='text-white text-base font-normal'>
                                <p>seguntch@gmail.com</p>
                             </div>
                           </div>
                           </a>
                      </div>
                      <div className='flex  '>
                           <a href="https://www.upwork.com/freelancers/~017a0b62a0da4ec7f6">
                           <div className="flex gap-2 items-center">
                             <div>
                                   <SiUpwork className='w-6 h-6 text-white' />
                             </div>
                             <div className='text-white text-base font-normal'>
                                <p> Upwork</p>
                             </div>
                           </div>
                           </a>
                      </div>
                      <div className='flex  '>
                           <a href="https://t.me/Johnny_DC">
                           <div className="flex gap-2 items-center">
                             <div>
                                   <FcManager className='w-6 h-6 text-white' />
                             </div>
                             <div className='text-white text-base font-normal'>
                                <p> Team Manager </p>
                             </div>
                           </div>
                           </a>
                      </div>
                      </div>
                </aside>
                   
             </div>
        </div>
    </>
  )
}

export default Navbar