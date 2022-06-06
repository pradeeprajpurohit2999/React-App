import React from 'react'

function Token() {
  return (
    <div>
          <section className="bg-red-500 pt-10 mt-10 pb-10" >

              <h4 className='text-4xl  md:text-5xl text-white pb-10 text-center md:text-left  md:p-10 '>How to purchase the PayC Token</h4>
              <div className='   p-5    flex-col md:flex md:flex-row md:p-0 lg:p-10 '>
                  <div className='md:flex-1 '>
                      <div>

                          <ol className=" md:px-5 lg:px-12">
                              <li className='inline-flex pt-5'><img className="w-10" src="../images/arrow1.svg" alt='arrow' />
                                  <p className='text-2xl md:text-3xl text-white pl-5'>Download Metamask
                                      <p className='font-base text-sm pt-2 text-justify'>Download the official Metamask extension for Google Chrome
                                          from metamask.io and follow the steps to create your account</p>
                                  </p>

                              </li>
                              <li className='inline-flex pt-5'><img className="w-10" src="../images/arrow1.svg" alt='arrow' />
                                  <p className='text-2xl md:text-3xl text-white pl-5'>Purchase Matic on Exchange
                                      <p className='font-base text-sm pt-2 text-justify'>Buy some Matic on an exchange like Binance, as you will need
                                          Matic to purchase the PayC Token</p>
                                  </p>

                              </li>
                              <li className='inline-flex pt-5'><img className="w-10" src="../images/arrow1.svg" alt='arrow' />
                                  <p className='text-2xl md:text-3xl text-white pl-5'>Buy PayC Token
                                      <p className='font-base text-sm pt-2 text-justify'>You can now use your Matic to purchase your PayC token</p>
                                  </p>

                              </li>

                          </ol>
                      </div>
                  </div>
                  <div className='flex-1 pt-5 lg:-mt-16 '>
                      <img src='../images/girl1.png' alt='Girl' className="" />
                  </div>
              </div>

          </section>
    </div>
  )
}

export default Token