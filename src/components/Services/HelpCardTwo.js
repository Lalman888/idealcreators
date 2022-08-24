import React from 'react'

const HelpCardTwo = () => {
  return (
    <>
        <div className='flex w-full text-white flex-wrap mini:flex-col'>
             <div className='p-4 w-1/3 mini:w-full '>
                   <div className="w-full flex flex-col px-[15px] pb-5 text-center">
                        <div className='flex justify-center'>
                        <figure className='mb-5  w-[108px] max-w-[108px] '>
                            <img src="https://dexlegion.com/wp-content/uploads/2020/05/icon-02.png" alt="figure" className='h-auto max-w-full' />
                        </figure>
                        </div>
                        <div className='w-full text-xl font-semibold leading-6'>
                            <h3>Go Ethereum  <br/> Node Operation Consultancy</h3>
                        </div>
                        <div className='text-base leading-7  text-[#c5c5c5]'>
                              <p>From UI/UX design to backend development and deployment, we offer end-to-end services to navigate and accelerate your dApp development journey.</p>
                        </div>
                   </div>
             </div>
             <div className='p-4 w-1/3 mini:w-full '>
                   <div className="w-full flex flex-col px-[15px] pb-5 text-center">
                        <div className='flex justify-center'>
                        <figure className='mb-5  w-[108px] max-w-[108px] '>
                            <img src="https://dexlegion.com/wp-content/uploads/2020/05/icon-09.png" alt="figure" className='h-auto max-w-full' />
                        </figure>
                        </div>
                        <div className='w-full text-xl font-semibold leading-6'>
                            <h3>Custom <br/> API's & RPC Servers</h3>
                        </div>
                        <div className='text-base leading-7 text-[#c5c5c5] '>
                              <p>We can develop a custom RPC server or API services that will provide data from the blockchain for you to integrate into your application.</p>
                        </div>
                   </div>
             </div>
             <div className='p-4 w-1/3 mini:w-full '>
                   <div className="w-full flex flex-col px-[15px] pb-5 text-center">
                        <div className='flex justify-center'>
                        <figure className='mb-5  w-[108px] max-w-[108px] '>
                            <img src="https://dexlegion.com/wp-content/uploads/2020/05/icon-03.png" alt="figure" className='h-auto max-w-full' />
                        </figure>
                        </div>
                        <div className='w-full text-xl font-semibold leading-6'>
                            <h3>Bot  <br/> Development</h3>
                        </div>
                        <div className='text-base leading-7 text-[#c5c5c5]'>
                              <p>We coded liquidity sniper, arbitrage, and flash loan bots in EVM-based networks. Our honeypot checker bot is available in the demo. We are highly open to new bot ideas.</p>
                        </div>
                   </div>
             </div>
        </div>
    </>
  )
}

export default HelpCardTwo