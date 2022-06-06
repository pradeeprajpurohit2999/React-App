import React from 'react'

function Product() {
  return (
    <div>
          <section id="theproduct" className='bg-white mx-4    lg:mx-40 md:mx-5 px-5 md:px-10 flex-sapce-between shadow rounded-lg flex-col md:flex md:flex-row -mt-20 py-10'>
              <div className='md:flex-1 flex-row px-2 md:pr-10'>
                  <h1 className='text-justify pb-5 text-4xl font-bold' > The Product</h1>
                  <p className='text-justify font-base pb-5'>You can store multiple cryptocurrencies on our mobile app,
                      which is a breeze to use. All of your funds are protected by
                      state of the art security technologies, so you can make a
                      transaction in seconds without any worries.</p>
                  <p className='text-justify'>And if you want to swap one cryptocurrency for another? </p>
                  <p className='text-justify text-orange-600 font-bold'>Well, that's instant too!</p>
                  <p className='pt-5 pb-10 inline-flex items-center font-bold hover:cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill='#EA580C' viewBox="0 0 24 24" className='pr-2 animate-pulse'><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" /></svg>See How It Works</p>
              </div>
              <div className='md:flex-1 flex-row '>
                  <div className='card bg-slate-100 rounded-lg w-100 p-10 mb-5 text-justify shadow-inner'>
                      <h1 className='text-3xl pb-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" className='pb-2' viewBox="0 0 576 512" height="50" width="50" fill='#EA580C'><path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z" /></svg>
                          AI - based <br />Infrastrcuture
                      </h1>
                      <p>Our platform provides user friendly which is
                          integrated with machine learning and Al-based
                          algorithms to make payments simple and easy with
                          a single QR code to receive any cryptocurrency
                          without any hassle.</p>
                  </div>
                  <div className='card bg-slate-100 rounded-lg w-100 p-10 text-justify shadow-inner'>
                      <h1 className='text-3xl pb-1'>
                          <svg xmlns="http://www.w3.org/2000/svg" className='pb-2' viewBox="0 0 384 512" height="50" width="50" fill='#EA580C'><path d="M240.5 224H352C365.3 224 377.3 232.3 381.1 244.7C386.6 257.2 383.1 271.3 373.1 280.1L117.1 504.1C105.8 513.9 89.27 514.7 77.19 505.9C65.1 497.1 60.7 481.1 66.59 467.4L143.5 288H31.1C18.67 288 6.733 279.7 2.044 267.3C-2.645 254.8 .8944 240.7 10.93 231.9L266.9 7.918C278.2-1.92 294.7-2.669 306.8 6.114C318.9 14.9 323.3 30.87 317.4 44.61L240.5 224z" /></svg>
                          Multiple services<br />
                          at One place
                      </h1>
                      <p>We have plenty of other services, including utility
                          bill payments, mobile top-ups, flights, bus tickets,
                          hotel bookings, Metro payment services, merchant
                          services and more.</p>
                  </div>

              </div>
              <div>

              </div>
          </section>
    </div>
  )
}

export default Product