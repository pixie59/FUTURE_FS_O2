'use client'
import { useState } from 'react'

const products = [
  { id: 1, name: "Shoes", price: 1200, img: "/images/shoes.jpg" },
  { id: 2, name: "Watch", price: 1500, img: "/images/watch 2.jpeg" },
  { id: 3, name: "Headphones", price: 900, img: "/images/headphones2.jpeg" }
]


export default function Home() {
  const [cart, setCart] = useState<any[]>([])

  function addToCart(product: any) {
    const updated = [...cart, product]
    setCart(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
  }

  return (
    <main style={{
      padding: 40,
      background: '#f3f4f6',
      minHeight: '100vh',
      color: '#111'
    }}>

      <h1>Mini E-Commerce Store</h1>

      <button
        onClick={() => window.location.href = '/cart'}
        style={{
          margin: '20px 0',
          padding: '10px 20px',
          border: 'none',
          borderRadius: 6,
          background: '#000',
          color: '#fff',
          cursor: 'pointer'
        }}
      >
        Go to Cart 🛒
      </button>

     <div style={{ display: 'flex', gap: 20 }}>
  {products.map(p => (
    <div
      key={p.id}
      style={{
        background: '#fff',
        padding: 20,
        width: 220,
        borderRadius: 12,
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}
    >

      <img
        src={p.img}
        alt={p.name}
        style={{
          width: '100%',
          height: 150,
          objectFit: 'cover',
          borderRadius: 10,
          marginBottom: 10
        }}
      />

      <h3>{p.name}</h3>
      <p>₹{p.price}</p>

      <button
        onClick={() => addToCart(p)}
        style={{
          marginTop: 10,
          padding: '8px 12px',
          border: 'none',
          borderRadius: 6,
          background: '#000',
          color: '#fff',
          cursor: 'pointer'
        }}
      >
        Add to Cart
      </button>

    </div>
  ))}
</div>

      <h2 style={{ marginTop: 30 }}>Cart: {cart.length} items</h2>
    </main>
  )
}

