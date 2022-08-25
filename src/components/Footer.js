import React from 'react'
import logo from '../assets/ideal.png'
import upwork from '../assets/upwork.png'
import {FcManager} from 'react-icons/fc'

const Footer = () => {
  return (
    <>
        <section className='bg-[#0d1424] relative'>
          <div className='xl:max-w-[1190px] lg:max-w-[1018px] mini:max-w-[calc(90%+20px)] small:max-w-[440px] sm:max-w-[580px] h-full mx-auto flex relative ' >
             <div className='w-full h-full p-[10px]'>
                  <div className='border-b-[1px] w-full border-solid border-[#0095FABD] p-[10px] h-44'>
                        <div className="w-full items-center h-full mini:justify-center flex">
                          <a href='/' className="flex justify-start">
                          <img src={logo} alt="logo" />
                          </a>
                        </div>
                  </div>
                  <div className='flex  mini:flex-col mini:text-center'>
                    <div className="w-1/2 p-4 mini:w-full" >
                       <div className='flex w-full flex-col gap-5 '>
                             <div className='text-xl font-extrabold text-[#fff]'>
                                  <h4>About</h4>
                             </div>
                             <div className='text-base text-[#f0f0f0] font-normal'>
                                 <p>Ideal Creators is a software company working in the Web3 space.</p>
                             </div>
                             <div className="flex gap-6 mini:justify-center">
                                 <div className='flex items-center'>
                                    <a href="https://t.me/Ideal_Creators_Team">
                                        <img className=' w-8 h-8 ' src="https://dexlegion.com/wp-content/uploads/2021/04/telegram-icon-blue-32.png" alt="telegram" />
                                    </a>
                                 </div>
                                 <div className='flex items-center'>
                                    <a href="mailto:seguntch@gmail.com">
                                        <img className=' w-8 h-8 ' src="https://dexlegion.com/wp-content/uploads/2021/04/gmail-icon-32.png" alt="gmail" />
                                    </a>
                                 </div>
                                 <div className='flex items-center'>
                                    <a href="https://www.upwork.com/freelancers/~017a0b62a0da4ec7f6">
                                        <img className=' w-8 h-8 ' src={upwork} alt="upwork" />
                                    </a>
                                 </div>
                                 <div className='flex items-center'>
                                    <a href="https://t.me/Johnny_DC">
                                        <FcManager className=' w-8 h-8 '/>
                                    </a>
                                 </div>

                             </div>
                       </div>
                       </div>
                    <div className="w-1/2 p-4 mini:w-full" >
                       <div className='flex w-full flex-col gap-5 '>
                             <div className='text-xl font-extrabold text-[#fff]'>
                                  <h4>Portfolio</h4>
                             </div>
                             <a href="https://vipminerv2.finance/" className='text-base text-[#f0f0f0] font-normal'>
                                 <p>VIP Miner</p>
                             </a>
                             <a href="https://zesty-melba-bfa271.netlify.app/" className='text-base text-[#f0f0f0] font-normal'>
                                 <p>BSC Sniper</p>
                             </a>
                             
                       </div>
                       </div>
                    <div className="w-1/2 p-4 mini:w-full" >
                       <div className='flex w-full flex-col gap-5 '>
                             <div className='text-xl font-extrabold text-[#fff]'>
                                  <h4>Community</h4>
                             </div>
                             <a href="https://t.me/Ideal_Creators_Team" className='text-base text-[#f0f0f0] font-normal'>
                                 <p>Ideal Creators</p>
                             </a>
                            
                             
                       </div>
                       </div>
                       <div className='w-1/2'>

                       </div>
                    

                  </div>
                  <div className='text-[#f0f0f0] text-sm flex justify-center pt-9 pb-4'>
                      <p>© 2022 — Ideal Creators. All Rights Reserved.</p>
                  </div>
             </div>

          </div>

        </section>
    </>
  )
}

export default Footer