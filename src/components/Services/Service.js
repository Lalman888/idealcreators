import React from 'react'
import HelpCard from './HelpCard'
import HelpCardTwo from './HelpCardTwo'
import HelpCardThree from './HelpCardThree'

const Service = () => {
  return (
    <>
        <section className='bg-[#0d1424] -mt-7 overflow-hidden'>
            <div className='max-w-[1190px] h-full mx-auto flex relative '>
                <div className='w-full h-full p-[10px]'>
                    <div className='flex w-full h-full'>
                        <div className='flex w-full flex-col h-full relative gap-3'>
                             
                             <div className='absolute z-[1] -right-[11.5%] -top-[5px] w-auto rotates-cube'>
                                   <div className=''><img className='w-[210px]' src="https://dexlegion.com/wp-content/uploads/2021/05/home12_cube2.png" alt="cube" /></div>
                             </div>

                             <div className='h-14'></div>

                             <div className='py-1 text-center font-bold text-base uppercase w-full text-[#c5c5c5] '>
                                   <h2>OUR SERVICES</h2>  
                             </div>
                             <div className=' mb-6 text-center font-bold text-base uppercase w-full text-[#c5c5c5] ' >
                                 <p className=' text-white text-[34px] font-extrabold leading-10 help-text'>How We Can Help?</p>
                             </div>
                             <div className='flex flex-col flex-wrap'>
                                <HelpCard />
                                <HelpCardTwo />
                                <HelpCardThree />
                             </div>
                         </div>
                        
                     </div>
                </div>
            </div>
            <div className='relative'>

            
            <div className='absolute z-[1] -left-[4%] -top-[142px] w-auto rotates-cube'>
                                   <div className=''><img className='w-[210px]' src="https://dexlegion.com/wp-content/uploads/2021/05/home12_cube2.png" alt="cube" /></div>
                             </div>
                             </div>

        </section>
    </>
  )
}

export default Service