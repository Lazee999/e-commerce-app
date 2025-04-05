import React from 'react'
import menu from '../../img/menu.svg'
import search from '../../img/search.svg'
import cart from '../../img/cart.svg'

const Header = () => {
  return (
    <header className='w-full p-5 bg-my-background flex items-center '>
      {/* header left  */}

      <div>
        <img src={menu} alt='menu' className='w-6 h-6 object-contain' />
        <h1>Lazee <span>DEV</span></h1>
        <div >
            <input type="text" placeholder='Search' />
            <img src={search} alt='search' className='w-6 h-6 object-contain' />
        </div>
      </div>
      {/* header right  */}
      <img src={cart} alt='cart' className='w-6 h-6 object-contain' />
    </header>
  )
};

export default Header;