import React from 'react'
import { CgShapeCircle, CgArrowRight, CgArrowLeft, CgArrowDown } from 'react-icons/cg'
import { IconContext } from 'react-icons'


function RoadMap() {
  return (
    <div>
      <IconContext.Provider value={{ color: "#ff0000", size: "30px" }}>
        <section className="">
          <div>
            <h1 className="text-center text-4xl font-semibold p-5 md:p-20 ">THE ROADMAP</h1>
            <div className=' justify-center items-center hidden lg:flex  text-sm '>
              <div className='flex flex-col  text-sm'>
                <div className='card   h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowRight className='absolute top-1/3 right-0' /></IconContext.Provider>
                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span className=' flex flex-inline'><CgShapeCircle /> </span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>
                <div className='card h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowLeft className='absolute top-1/3 right-0' /></IconContext.Provider>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowDown className='absolute bottom-0 left-1/3' /></IconContext.Provider>
                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2022 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Lorem ipsum</b>

                  </div>

                </div>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowRight className='absolute top-1/3 right-0' /></IconContext.Provider>
                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>

              </div>
              <div className='flex flex-col'>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowRight className='absolute top-1/3 right-0' /></IconContext.Provider>
                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2019 Q1 & Q2</p>
                    <span><CgShapeCircle /></span>
                    <b>Team assemble and
                      proving the concept
                      of work</b>

                  </div>

                </div>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowLeft className='absolute top-1/3 right-0' /></IconContext.Provider>

                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowRight className='absolute top-1/3 right-0' /></IconContext.Provider>
                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>

              </div><div className='flex flex-col'>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowRight className='absolute top-1/3 right-0' /></IconContext.Provider>
                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2019 Q3 & Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Platform Research on
                      crypto Payments &
                      Strategic Plan</b>

                  </div>

                </div>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowLeft className='absolute top-1/3 right-0' /></IconContext.Provider>

                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowRight className='absolute top-1/3 right-0' /></IconContext.Provider>
                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>
                </div>

              </div>
              <div className='flex flex-col'>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowDown className='absolute bottom-0 left-1/3' /></IconContext.Provider>
                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2019 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Platform design & Crypto payment gateway development</b>

                  </div>
                </div>
                <div className='card  h-52 w-52 flex-row'>

                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>
                <div className='card  h-52 w-52 flex-row'>
                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>
                </div>

              </div>

            </div>

            {/* */}

            <div className=' justify-center items-center hidden md:flex lg:hidden '>
              <div className='flex flex-col'>
                <div className='card   h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowRight className='absolute top-1/3 right-0' /></IconContext.Provider>
                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span className=' flex flex-inline'><CgShapeCircle /> </span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>
                <div className='card h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowLeft className='absolute top-1/3 right-0' /></IconContext.Provider>

                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowDown className='absolute bottom-0 left-1/3' /></IconContext.Provider>
                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowRight className='absolute top-1/3 right-0' /></IconContext.Provider>
                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowLeft className='absolute top-1/3 right-0' /></IconContext.Provider>

                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>
                </div>

              </div>
              <div className='flex flex-col'>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowRight className='absolute top-1/3 right-0' /></IconContext.Provider>
<div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowLeft className='absolute top-1/3 right-0' /></IconContext.Provider>

                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowRight className='absolute top-1/3 right-0' /></IconContext.Provider>
                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowLeft className='absolute top-1/3 right-0' /></IconContext.Provider>

                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>

              </div>
              <div className='flex flex-col'>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowDown className='absolute bottom-0 left-1/3' /></IconContext.Provider>
                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>
                <div className='card  h-52 w-52 flex-row relative'>

                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowDown className='absolute bottom-0 left-1/3' /></IconContext.Provider>
                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>
                </div>
                <div className='card  h-52 w-52 flex-row relative'>

                  <div className='h-40 p-5 w-40 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>
                </div>

              </div>
              <div className='flex flex-col'>




              </div>

            </div>
            {/*  */}


            <div className=' justify-center items-center flex md:hidden  '>
              <div className='flex flex-col  text-sm'>
                <div className='card   h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowDown className='absolute bottom-0 left-1/2' /></IconContext.Provider>
                  <div className='h-40 p-5 w-52 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span className=' flex flex-inline'><CgShapeCircle /> </span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>
                <div className='card h-52 w-52 flex-row relative'>
                  
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowDown className='absolute bottom-0 left-1/2' /></IconContext.Provider>
                  <div className='h-40 p-5 w-52 shadow-lg overflow-hidden'>
                    <p>2022 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Lorem ipsum</b>

                  </div>

                </div>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowDown className='absolute bottom-0 left-1/2' /></IconContext.Provider>
                  <div className='h-40 p-5 w-52 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>
                <div className='card  h-52 w-52 flex-row relative'>
                  <IconContext.Provider value={{ color: "#000000", size: "30px" }}><CgArrowDown className='absolute bottom-0 left-1/2' /></IconContext.Provider>
                  <div className='h-40 p-5 w-52 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>
                <div className='card  h-52 w-52 flex-row relative'>
                  
                  <div className='h-40 p-5 w-52 shadow-lg overflow-hidden'>
                    <p>2018 Q4</p>
                    <span><CgShapeCircle /></span>
                    <b>Concept generation
                      & research</b>

                  </div>

                </div>

              </div>
              
              



            </div>




          </div>

        </section>
      </IconContext.Provider>

    </div>
  )
}

export default RoadMap