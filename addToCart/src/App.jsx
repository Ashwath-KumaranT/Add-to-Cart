import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function openCart() {
    setIsCartOpen(true);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <div className='bg-gray-200 min-h-screen'>
      <NavBar cartCount={cartItems.length} openCart={openCart} />
      <ProductList cartItems={cartItems} setCartItems={setCartItems} />
      {
        isCartOpen && (
          <Cart cartItems={cartItems} closeCart={closeCart} removeFromCart={removeFromCart} />
        )
      }
    </div>
  )
}

export default App
