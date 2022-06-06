import React , {useState} from 'react'
import { IoIosArrowDown, IoIosArrowDroprightCircle } from 'react-icons/io';
import {IconContext} from 'react-icons'





function FAQs() {

    const FAQs = [
        {
            question: 'diam sollicitudin tempor id eu nisl nunc',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in. Facilisi morbi tempus iaculis urna. Morbi tincidunt ornare massa eget egestas purus viverra accumsan.',
            
        },
        {
            question: 'diam sollicitudin tempor id eu nisl nunc',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in. Facilisi morbi tempus iaculis urna. Morbi tincidunt ornare massa eget egestas purus viverra accumsan.',
            
        },
        {
            question: 'diam sollicitudin tempor id eu nisl nunc',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in. Facilisi morbi tempus iaculis urna. Morbi tincidunt ornare massa eget egestas purus viverra accumsan.',
        
        },
        {
            question: 'diam sollicitudin tempor id eu nisl nunc',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in. Facilisi morbi tempus iaculis urna. Morbi tincidunt ornare massa eget egestas purus viverra accumsan.',

        }
    ];

    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if (clicked === index) {
            // if clicked quetion is already active, then close it
            return setClicked(null)
        }
        setClicked(index)
    }

  return (
      <div className="bg-[#d3d0d0] p-10">
        <IconContext.Provider value={{ color: "#ff0000", size: "30px" }}>
          <section>

              <div>
                  <div className="mx-auto text-center pb-10 px-2 mt-12 text-3xl font-bold text-black ">
                      Frequently Asked Questions
                  </div>

                  <div className='faqs'>
                      {FAQs.map((faq,index) => {
                          return(
                              <div className={clicked === index ? "border-red-600" : "border-orange-900"}>
                              <div   className='p-3 py-5 transition-all px-10 shadow-lg  focus:border-2 cursor-pointer focus-within:border-2 rounded max-w-3xl mx-auto bg-white mt-5' onClick={() => toggle(index)} key={index}>
                                  <div className=' flex justify-between ' >
                                      <h1 className='font-bold'>{faq.question}</h1>
                                      <span>{clicked === index ? <IoIosArrowDroprightCircle /> : <IoIosArrowDown />  }</span>
                                      
                                  </div>
                                  {clicked === index ? (
                                      <div className='text-base transition-all'>
                                          <p className='text-sm text-justify md:pr-20 transition-all'>{faq.answer}</p>
                                      </div>
                                  ) : null }
                                  
                                  
                              </div>
                              </div>
                          )
                      }) }
                  </div>
                      {/* <div className='p-3 py-5 px-10 justify-between focus:border-2 cursor-pointer focus-within:border-2 flex rounded max-w-3xl mx-auto bg-white mt-5'>
                          <h3 className='' >This is heading</h3>
                          <img src='../images/Vector.svg' />
                      </div> */}
                    
                 
              </div>

             

              {/* <h1 className='text-4xl text-center font-semibold'>FAQ's</h1>
            <div className='item-center flex border-4' >
                <div className=''>
                    <h4>This is dummy text</h4>
                </div>
                <div className=''></div>
                <div className=''></div>
                <div className=''></div>
            </div> */}

          </section>
        </IconContext.Provider>
         
    </div>
    
  )
}

export default FAQs