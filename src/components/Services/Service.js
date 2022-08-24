import React from 'react'
import HelpCard from './HelpCard'
import HelpCardTwo from './HelpCardTwo'
import HelpCardThree from './HelpCardThree'

const Service = () => {
  return (
    <>
        <section className='bg-[#0d1424] -mt-7 overflow-hidden'>
            <div className='xl:max-w-[1190px] lg:max-w-[1018px] mini:max-w-[calc(90%+20px)] small:max-w-[440px] sm:max-w-[580px] h-full mx-auto flex relative '>
                <div className='w-full h-full p-[10px]'>
                    <div className='flex w-full h-full'>
                        <div className='flex w-full flex-col h-full relative gap-3 mini:p-[10px]'>
                             
                             <div className='absolute z-[1] -right-[11.5%] mini:right-[15px] mini:-top-[12px] -top-[5px] w-auto rotates-cube'>
                                   <div className=''><img className='w-[210px] mini:w-[100px]' src="https://dexlegion.com/wp-content/uploads/2021/05/home12_cube2.png" alt="cube" /></div>
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
            <div className='relative mini:pb-14 pb-14'>

            
            <div className='absolute z-[1] xl:-left-[4%] lg:-left-[8%] mini:l-[20px] mini:-top-14 xl:-top-[142px] lg:-top-[200px] w-auto rotates-cube'>
                                   <div className=''><img className='w-[210px] mini:w-[100px]' src="https://dexlegion.com/wp-content/uploads/2021/05/home12_cube2.png" alt="cube" /></div>
                             </div>
                             </div>

        </section>
    </>
  )
}

export default Service