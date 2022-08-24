import React from 'react'

const Tech = () => {
  return (
    <>
        <section className='bg-[#0d1424] z-[2] '>
            <div className='xl:max-w-[1190px] lg:max-w-[1018px] mini:max-w-[calc(90%+20px)] small:max-w-[440px] sm:max-w-[580px] h-full mx-auto flex relative'>
               <div className=" w-full p-2 mini:p-3 pb-4 relative">
                <div className='absolute left-[91px] -top-[154px] small-cube'>
                     <img className='w-[106px]' src="https://dexlegion.com/wp-content/uploads/2021/05/home12_cube3.png" alt="small-cube" />
                </div>
                 <div className='text-center mini:px-10 text-white text-base uppercase font-bold z-[5] pb-2 '>
                 <p>TOP LEVEL DEVELOPMENT ENVIRONMENT &amp; TOOLS</p>
                 </div>
                 <div className='text-center z-[5] pb-3 text-white text-[34px] font-bold  '>
                    <h2>Make It Happen
With Our Technologies</h2>
                 </div>

               </div>

            </div>
        </section>
        <section className='bg-[#0d1424] py-10 '>
          <div className='xl:max-w-[1190px] lg:max-w-[1018px] mini:max-w-[calc(90%+20px)] mini:flex-col mini:items-center mini:gap-5 small:max-w-[440px] sm:max-w-[580px] h-full mx-auto flex relative' >
              <div className='w-1/4 mini:w-[50%] p-[10px] h-full '>
                     <div className="w-full h-full flex flex-col gap-5">
                         <div className='flex justify-center'> <img className='w-[175px] pb-7' src="https://dexlegion.com/wp-content/uploads/2022/06/ethereum-logo-white.png" alt="eth" /> </div>
                         <div className='flex justify-center'> <img className='w-[175px] pb-7' src="https://dexlegion.com/wp-content/uploads/2022/06/binance-logo.png" alt="bin" /> </div>
                         <div className='flex justify-center'> <img className='w-[175px] ' src="https://dexlegion.com/wp-content/uploads/2022/06/solana-logo-white.png" alt="solana" /> </div>

                     </div>

              </div>
              <div className='w-1/4 mini:w-[50%] p-[10px] h-full '>
                     <div className="w-full h-full flex flex-col gap-5">
                         <div className='flex justify-center'> <img className='w-[175px] pb-7' src="https://dexlegion.com/wp-content/uploads/2022/06/nodejs-logo-white.png" alt="eth" /> </div>
                         <div className='flex justify-center'> <img className='w-[175px] pb-7' src="https://dexlegion.com/wp-content/uploads/2022/06/javascript-logo.png" alt="bin" /> </div>
                         <div className='flex justify-center'> <img className='w-[175px] ' src="https://dexlegion.com/wp-content/uploads/2022/06/typescript-logo.png" alt="solana" /> </div>

                     </div>

              </div>
              <div className='w-1/4 mini:w-[50%] p-[10px] h-full '>
                     <div className="w-full h-full flex flex-col gap-5">
                         <div className='flex justify-center'> <img className='w-[175px] pb-7' src="https://dexlegion.com/wp-content/uploads/2022/06/solidity-logo-white.png" alt="eth" /> </div>
                         <div className='flex justify-center'> <img className='w-[175px] pb-7' src="https://dexlegion.com/wp-content/uploads/2022/06/ethersjs-logo-white-2.png" alt="bin" /> </div>
                         <div className='flex justify-center'> <img className='w-[175px] ' src="https://dexlegion.com/wp-content/uploads/2022/06/web3js-logo.png" alt="solana" /> </div>

                     </div>

              </div>
              <div className='w-1/4 mini:w-[50%] p-[10px] h-full '>
                     <div className="w-full h-full flex flex-col gap-5">
                         <div className='flex justify-center'> <img className='w-[175px] pb-7' src="https://dexlegion.com/wp-content/uploads/2022/06/truffle-logo.png" alt="eth" /> </div>
                         <div className='flex justify-center'> <img className='w-[175px] pb-7' src="https://dexlegion.com/wp-content/uploads/2022/06/ganache-logo.png" alt="bin" /> </div>
                         <div className='flex justify-center'> <img className='w-[175px] ' src="https://dexlegion.com/wp-content/uploads/2022/06/hardhat-logo.png" alt="solana" /> </div>

                     </div>

              </div>

          </div>
        

        </section>
    </>
  )
}

export default Tech