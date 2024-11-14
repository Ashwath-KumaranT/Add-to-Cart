import React, { useEffect, useState } from 'react';

function ProductList({ cartItems, setCartItems }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(product => setProducts(product))
  }, []);

  const addToCart = (product) => {
    if (cartItems.find((item) => item.id === product.id)) {
      alert('Product already in cart');
    } else {
      setCartItems([...cartItems, product]);
    }
  }

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
      {products.map((product) => (
        <div key={product.id} className='bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl'>
          <img src={product.image} alt={product.title} className='h-40 mx-auto mb-4 ' />
          <h2 className='text-lg font-semibold text-gray-700'>{product.title}</h2>
          <p className='text-lg text-red-600 font-bold'>${product.price}</p>
          <button onClick={() => addToCart(product)} className='bg-green-500 w-full rounded-full text-white py-2 my-2 hover:bg-green-600 font-semibold'>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductList
