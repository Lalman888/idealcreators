import React,{useState} from 'react'
import { FiMenu } from 'react-icons/fi'
import { FaTelegram,FaEnvelope,FaGithub } from 'react-icons/fa'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
  return (
    <>
        <div className='absolute z-[1000] top-0 left-0 w-full'>
             <nav className='relative w-full px-[2%] z-auto left-0 mx-auto flex items-center min-h-[108px]'>
                  <div className='px-[22px] flex justify-between w-full '>
                     <div className='flex items-center'>
                        <a href="#">
                            <img className='w-auto  max-h-[50px]' src="https://dexlegion.com/wp-content/uploads/2021/04/dexlegion-logo-white-horizontal-last-2.png" alt="logo" />
                        </a>
                     </div>
                     <div className='flex items-center gap-4 '>
                          <div>
                                <a href="#">
                                     <div className=' text-white px-7 py-3 bg-transparent text-xs font-bold rounded-md ' style={{background: 'linear-gradient(90deg,#0095fa -20%,#00c1cd 115%)'}}>
                                         <span>GET IN TOUCH</span>
                                     </div>
                                </a>
                          </div>
                          <div className='menuani'>
                                 <FiMenu onClick={() => setMenu(true)} className='w-8 h-7 text-white cursor-pointer' />
                          </div>
                     </div>

                  </div>
             </nav>
        </div>
        <div className={` ${menu ? "block right-0" : "hidden -right-[420px]"} ease-in duration-500  bottom-0 absolute z-[9999] top w-[390px]  `} >
             <div className='close-menu' onClick={() => setMenu(false)}>
              
             </div>
             <div className='h-[100vh] w-full py-[40px] px-[25px] z-[2] bg-[#0d1424] relative inset-0 '>
                <aside className='flex flex-col gap-10 '>
                      <div className='relative'>
                             <img src="https://dexlegion.com/wp-content/uploads/2021/04/dexlegion-logo-white-vertical-2.png" alt="logo" />
                      </div>
                      
                        <div className='flex flex-col gap-5 '>
                        <div className='text-xl font-semibold text-white' style={{fontFamily: 'Nunito'}}>
                             <h4>About Us</h4>
                      </div>
                      <div >
                          <p className='m-0 text-white text-base font-normal'>Ideal Creators is a software company working in the Web3 space.</p>
                      </div>
                        </div>
                      <div className="flex flex-col gap-1">
                      <div className='flex  '>
                           <a href="#">
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
                           <a href="#">
                           <div className="flex gap-2 items-center">
                             <div>
                                   <FaEnvelope className='w-6 h-6 text-white' />
                             </div>
                             <div className='text-white text-base font-normal'>
                                <p>0xdexlegion@gmail.com</p>
                             </div>
                           </div>
                           </a>
                      </div>
                      <div className='flex  '>
                           <a href="#">
                           <div className="flex gap-2 items-center">
                             <div>
                                   <FaGithub className='w-6 h-6 text-white' />
                             </div>
                             <div className='text-white text-base font-normal'>
                                <p> Dexlegion</p>
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