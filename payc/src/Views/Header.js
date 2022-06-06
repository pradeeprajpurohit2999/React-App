export default function Header() {
    return (
        <div>
           

            <section className='bg-[#F9EBEB] grid pb-20 lg:pb-40 md:pb-20 '>
                <div className='align-center w-full py-5 text-center z-10  '>PayC</div>
                <div className='py-10 center-center'>
                    <img className='absolute right-24 top-20 invisible md:invisible lg:visible' src='../images/saly-2.svg' alt="icon" />
                    <h1 className='h1 text-center text-2xl font-bold md:text-6xl '>Paying for the things with<br />crypto currencies has<br />never been easer.</h1>
                    <p className='text-center py-4 px-2'>Introducing Payc, the hassle-free crytpo-based payment gateway mobile-based<br />application that is changing the way people transact with their digital currency.<br />
                        We are listed on Uniswap</p>
                    <button className='bg-red-500 px-4 py-2 rounded  flex mx-auto hover:bg-red-700 text-white text-base'>Buy Our Token at Uniswap</button>
                </div>

                <a href="#theproduct" ><p className='text-center pb-10 animate-bounce'>Scroll down<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="30" className='flex mx-auto'><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" /></svg></p></a>
                
        </section>

       

           

        
       
        

        </div>
    )
}
