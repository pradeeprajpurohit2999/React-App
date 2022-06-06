import React from 'react'

function AboutUs() {
  return (
    <div>
          <section className='p-10 lg:mx-20' >
              <div className='text-center p-5 pb-10  text-3xl'>ENOUGH OF <span className='text-red-600'>YOU</span><br />LET'S HEAR <span className='text-red-600'>ABOUT US</span></div>
              <div className='text-center flex flex-col mx-auto md:flex-row gap-10 items-center'>
                  <div className='  items-center pb-10 md:flex-1'>
                      <img src='../images/pr.jpg' />
                      <p className='font-bold pt-5'>jose</p>
                      <p>Founder</p>
                  </div>
                  <div className=' items-center pb-10 md:flex-1'>
                      <img src='../images/hemant.jpg' />
                      <p className='font-bold pt-5'>Tom</p>
                      <p>Co-Founder</p>
                  </div>
                  <div className=' items-center pb-10 md:flex-1'>
                      <img src='../images/kishor.jpg' />
                      <p className='font-bold pt-5'>krish</p>
                      <p>CEO</p>
                  </div>
              </div>

        </section>
    </div>
  )
}

export default AboutUs