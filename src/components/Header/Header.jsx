import React from 'react'
import menu from '../../img/menu.svg'
import search from '../../img/search.svg'
import cart from '../../img/cart.svg'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 z-[100]  w-full p-5 drop-shadow-header-shadow bg-my-background flex items-center justify-between'>
      {/* header left  */}

      <div className='flex items-center '>
        <img src={menu} alt='menu' className='w-6 h-6 object-contain cursor-pointer' />
        <h1 className='ml-2 text-sm font-bold'>LUIZ <span className='text-[#c82196]'>DEV</span></h1>
        <div className='overflow-hidden ml-2 flex items-center rounded-full bg-[#fdfafa]'>
            <input type="text" placeholder='Search' className='ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit' />
            <img src={search} alt='search' className='w-6 h-6 object-contain cursor-pointer' />
        </div>
      </div>
      {/* header right  */}
      <img src={cart} alt='cart' className='w-6 h-6 object-contain cursor-pointer mr-2' />
    </header>
  )
};
 
export default Header;