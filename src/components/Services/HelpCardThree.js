import React from 'react'

const HelpCardThree = () => {
  return (
    <>
        <div className='flex w-full text-white flex-wrap mini:flex-col'>
             <div className='p-4 w-1/3 mini:w-full '>
                   <div className="w-full flex flex-col px-[15px] pb-5 text-center">
                        <div className='flex justify-center'>
                        <figure className='mb-5  w-[108px] max-w-[108px] '>
                            <img src="https://dexlegion.com/wp-content/uploads/2020/05/icon-06.png" alt="figure" className='h-auto max-w-full' />
                        </figure>
                        </div>
                        <div className='w-full text-xl font-semibold leading-6'>
                            <h3>Decentralized   <br/> Cloud Services</h3>
                        </div>
                        <div className='text-base leading-7  text-[#c5c5c5]'>
                              <p>There are several decentralized cloud storage platforms that support peer-to-peer transactions and provide the most efficient cloud storage. We identify and choose the right platform for the projects.</p>
                        </div>
                   </div>
             </div>
             <div className='p-4 w-1/3 mini:w-full '>
                   <div className="w-full flex flex-col px-[15px] pb-5 text-center">
                        <div className='flex justify-center'>
                        <figure className='mb-5  w-[108px] max-w-[108px] '>
                            <img src="https://dexlegion.com/wp-content/uploads/2019/07/img_box_02.png" alt="figure" className='h-auto max-w-full' />
                        </figure>
                        </div>
                        <div className='w-full text-xl font-semibold leading-6'>
                            <h3>Smart Contract <br/> Audit & Security</h3>
                        </div>
                        <div className='text-base leading-7 text-[#c5c5c5] '>
                              <p>We can test your smart contract on testnet and mainnet with many important testing tools.</p>
                        </div>
                   </div>
             </div>
             <div className='p-4 w-1/3 mini:w-full '>
                   <div className="w-full flex flex-col px-[15px] pb-5 text-center">
                        <div className='flex justify-center'>
                        <figure className='mb-5  w-[108px] max-w-[108px] '>
                            <img src="https://dexlegion.com/wp-content/uploads/2019/07/img_box_15.png" alt="figure" className='h-auto max-w-full' />
                        </figure>
                        </div>
                        <div className='w-full text-xl font-semibold leading-6'>
                            <h3>Blockchain Automation   <br/> Systems Development</h3>
                        </div>
                        <div className='text-base leading-7 text-[#c5c5c5]'>
                              <p>We design data read and write automation systems that communicate with custom API or RPC with EVM-based networks.</p>
                        </div>
                   </div>
             </div>
        </div>
    </>
  )
}

export default HelpCardThree