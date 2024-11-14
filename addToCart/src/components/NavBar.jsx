import React from 'react'

function NavBar({ openCart, cartCount }) {
  return (
    <nav className='bg-gray-400 p-4 text-white flex justify-between items-center'>
      <h1 className='text-lg font-semibold hover:text-gray-950 cursor-pointer'>Welcome to the All in One Store :)</h1>
      <button onClick={openCart} className='text-lg font-semibold bg-gray-600 px-4 py-2 rounded-full hover:bg-black'>
        Cart: {cartCount}
      </button>
    </nav>
  )
}

export default NavBar
