import React from 'react'
import projectone from '../assets/projects/miner.png'

const Work = () => {
  return (
    <>
        <section className='bg-[#0d1424] pt-12 pb-16 transition-all ease-in duration-1000 ' id = "portfolio">
             <div className='xl:max-w-[1190px] lg:max-w-[1018px] mini:max-w-[calc(90%+20px)] small:max-w-[440px] sm:max-w-[580px] h-full mx-auto flex relative'>
                 <div className='p-2 w-full'>
                    <div className='flex w-full flex-col gap-1'>
                          <div className='flex justify-center text-white text-base font-bold uppercase ' style={{letterSpacing: '.01px'}}>
                          <p>PREVIOUS & ONGOING PROJECTS</p>

                          </div>
                          <div className='mb-12 flex text-white justify-center text-[34px] font-extrabold'>
                             <h2>Our Works</h2>

                          </div>
                          <div className=' flex relative h-[486px] mini:flex-col mini:px-6 '>
                             <div className='pr-[30px] mini:pr-0 pb-[30px] w-1/2 h-full absolute mini:w-full mini:relative left-0 top-0'>
                                <div className='relative h-full '>
                                    <a href="https://vipminerv2.finance/">
                                        <div className="img-box-card">

                                       
                                        <div className='relative z-[1] work-box'>
                                            <div className='pb-[80%] bg-[#1E2946]'>
                                            </div>
                                             <img src={projectone} alt="work" className='work-box-img' />
                                        </div>
                                        </div>
                                    </a>
                                </div>

                             </div> 


                             <div className='pr-[30px] mini:pr-0 pb-[30px] w-1/2 h-full absolute mini:w-full mini:relative mini:left-0 left-[50%] top-0'>
                                <div className='relative h-full '>
                                    <a href="https://zesty-melba-bfa271.netlify.app/">
                                        <div className="img-box-card">

                                       
                                        <div className='relative z-[1] work-box'>
                                            <div className='pb-[80%] bg-[#1E2946]'>
                                            </div>
                                             <img src="https://dexlegion.com/wp-content/uploads/2022/01/dexlegion-solana-raydium-liquidity-sniper-bot-arbitrage-flashloan-backg-1170x936.jpg" alt="work" className='work-box-img' />
                                        </div>
                                        </div>
                                    </a>
                                </div>

                             </div>

                          </div>
                    </div>

                 </div>

             </div>
        </section>
    </>
  )
}

export default Work