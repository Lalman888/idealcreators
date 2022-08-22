import React from 'react'
import logo from '../assets/ideal.png'

const Footer = () => {
  return (
    <>
        <section className='bg-[#0d1424] relative'>
          <div className='max-w-[1190px] h-full mx-auto flex relative ' >
             <div className='w-full h-full p-[10px]'>
                  <div className='border-b-[1px] w-full border-solid border-[#0095FABD] p-[10px] h-44'>
                        <div className="w-full items-center h-full flex">
                          <a href='/' className="flex justify-start">
                          <img src={logo} alt="logo" />
                          </a>
                        </div>
                  </div>
                  <div className='flex '>
                    <div className="w-1/2 p-4" >
                       <div className='flex w-full flex-col gap-5 '>
                             <div className='text-xl font-extrabold text-[#fff]'>
                                  <h4>About</h4>
                             </div>
                             <div className='text-base text-[#f0f0f0] font-normal'>
                                 <p>Ideal Creators is a software company working in the Web3 space.</p>
                             </div>
                             <div className="flex gap-6">
                                 <div className='flex items-center'>
                                    <a href="https://t.me/Ideal_Creators_Team">
                                        <img className=' w-8 h-8 ' src="https://dexlegion.com/wp-content/uploads/2021/04/telegram-icon-blue-32.png" alt="telegram" />
                                    </a>
                                 </div>
                                 <div className='flex items-center'>
                                    <a href="https://t.me/Ideal_Creators_Team">
                                        <img className=' w-8 h-8 ' src="https://dexlegion.com/wp-content/uploads/2021/04/gmail-icon-32.png" alt="telegram" />
                                    </a>
                                 </div>
                                 <div className='flex items-center'>
                                    <a href="https://t.me/Ideal_Creators_Team">
                                        <img className=' w-8 h-8 ' src="https://dexlegion.com/wp-content/uploads/2021/04/github-icon-32.png" alt="telegram" />
                                    </a>
                                 </div>

                             </div>
                       </div>
                       </div>
                    <div className="w-1/2 p-4" >
                       <div className='flex w-full flex-col gap-5 '>
                             <div className='text-xl font-extrabold text-[#fff]'>
                                  <h4>Portfolio</h4>
                             </div>
                             <div className='text-base text-[#f0f0f0] font-normal'>
                                 <p>BSC Sniper</p>
                             </div>
                             <div className='text-base text-[#f0f0f0] font-normal'>
                                 <p>BSC Sniper</p>
                             </div>
                             
                       </div>
                       </div>
                    <div className="w-1/2 p-4" >
                       <div className='flex w-full flex-col gap-5 '>
                             <div className='text-xl font-extrabold text-[#fff]'>
                                  <h4>Community</h4>
                             </div>
                             <div className='text-base text-[#f0f0f0] font-normal'>
                                 <p>BSC Sniper</p>
                             </div>
                            
                             
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