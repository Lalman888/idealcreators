import React from 'react'

const HelpCard = () => {
  return (
    <>
        <div className='flex w-full text-white flex-wrap mini:flex-col '>
             <div className='p-4 w-1/3 mini:w-full'>
                   <div className="w-full flex flex-col px-[15px] pb-5 text-center">
                        <div className='flex justify-center'>
                        <figure className='mb-5  w-[108px] max-w-[108px] '>
                            <img src="https://dexlegion.com/wp-content/uploads/2019/07/img_box_05.png" alt="figure" className='h-auto max-w-full' />
                        </figure>
                        </div>
                        <div className='w-full text-xl font-semibold leading-6'>
                            <h3>MVP Consulting</h3>
                        </div>
                        <div className='text-base leading-7  text-[#c5c5c5]'>
                              <p>Our team stays updated with the emerging dApp market trends and can help you analyze if your idea will succeed or not. We define technical components and suggest the right blockchain platform as per the client’s requirements.</p>
                        </div>
                   </div>
             </div>
             <div className='p-4 w-1/3 mini:w-full '>
                   <div className="w-full flex flex-col px-[15px] pb-5 text-center">
                        <div className='flex justify-center'>
                        <figure className='mb-5  w-[108px] max-w-[108px] '>
                            <img src="https://dexlegion.com/wp-content/uploads/2019/07/img_box_08.png" alt="figure" className='h-auto max-w-full' />
                        </figure>
                        </div>
                        <div className='w-full text-xl font-semibold leading-6'>
                            <h3>Smart Contract Development <br/> ERC Standart or Custom</h3>
                        </div>
                        <div className='text-base leading-7 text-[#c5c5c5] '>
                              <p>Our smart contract service includes writing, testing on local and testnet, and deploying contracts on mainnet EVM chains. We write our contracts with top-level security using openzeppelin ERC standards.</p>
                        </div>
                   </div>
             </div>
             <div className='p-4 w-1/3 mini:w-full '>
                   <div className="w-full flex flex-col px-[15px] pb-5 text-center">
                        <div className='flex justify-center'>
                        <figure className='mb-5  w-[108px] max-w-[108px] '>
                            <img src="https://dexlegion.com/wp-content/uploads/2019/07/img_box_07.png" alt="figure" className='h-auto max-w-full' />
                        </figure>
                        </div>
                        <div className='w-full text-xl font-semibold leading-6'>
                            <h3>Decentralized Application <br/> dApp Development</h3>
                        </div>
                        <div className='text-base leading-7 text-[#c5c5c5]'>
                              <p>From UI/UX design to backend development, deployment, and testing we offer end-to-end services to navigate and accelerate your dApp development journey.</p>
                        </div>
                   </div>
             </div>
        </div>
    </>
  )
}

export default HelpCard